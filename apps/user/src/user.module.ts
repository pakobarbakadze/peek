import { Module } from '@nestjs/common';
import UserRepository from './user.repository';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user.controller';
import { Neo4jModule } from '@app/common/neo4j/neo4j.module';
import { UserService } from './user.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), Neo4jModule],
  providers: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}
