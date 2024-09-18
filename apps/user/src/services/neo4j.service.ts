import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { error } from 'console';
import { Driver, Session, auth, driver } from 'neo4j-driver';

@Injectable()
export class Neo4jService implements OnModuleInit, OnModuleDestroy {
  private driver: Driver;

  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    this.driver = driver(
      this.configService.get<string>('NEO4J_URL'),
      auth.basic(
        this.configService.get<string>('NEO4J_USER'),
        this.configService.get<string>('NEO4J_PASSWORD'),
      ),
    );
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
