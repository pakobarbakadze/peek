import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('post')
  createUser(@Payload() data: any) {
    return this.userService.createUser(data);
  }

  @MessagePattern('get')
  getUser(@Payload() data: any) {
    return this.userService.getUser(data.name);
  }
}
