import { Module } from '@nestjs/common';
import { Neo4jModule } from './neo4j/neo4j.module';
import { UserController } from './user.controller';
import UserRepository from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [Neo4jModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
