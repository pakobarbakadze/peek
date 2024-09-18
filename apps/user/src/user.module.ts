import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import UserRepository from './user.repository';
import { ConfigModule } from '@nestjs/config';
import { Neo4jService, UserService } from './services';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [UserController],
  providers: [UserService, Neo4jService, UserRepository],
})
export class UserModule {}
