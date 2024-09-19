import { USER_SERVICE_NAME, UserServiceClient } from '@app/common/proto/user';
import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Param,
  Post,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { USER_SERVICE } from '../types/constants/services.const';

@Controller('user')
export class UserController implements OnModuleInit {
  private userService: UserServiceClient;

  constructor(@Inject(USER_SERVICE) private client: ClientGrpc) {}

  onModuleInit() {
    this.userService =
      this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  @Post()
  public async create(@Body() createUserDto: any) {
    return this.userService.createUser(createUserDto);
  }

  @Get(':name')
  public async get(@Param('name') name: string) {
    return this.userService.getUser({ name });
  }
}
