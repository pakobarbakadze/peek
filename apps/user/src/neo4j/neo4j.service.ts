import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { error } from 'console';
import { Driver, Session, auth, driver } from 'neo4j-driver';

@Injectable()
export class Neo4jService implements OnModuleInit, OnModuleDestroy {
  private driver: Driver;

  async onModuleInit() {
    this.driver = driver('neo4j://neo4j:7687', auth.basic('neo4j', 'peekpeek'));
    console.log('Neo4j driver initialized');
  }

  async onModuleDestroy() {
    await this.driver.close();
    console.log('Neo4j driver closed');
  }

  getSession(): Session {
    if (!this.driver) {
      throw error('Driver not initialized');
    }
    return this.driver.session();
  }
}
