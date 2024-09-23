import {
  CreateUserRequest,
  EmptyResponse,
  GetUserRequest,
  MakeFriendsRequest,
  UserResponse,
  UserServiceController,
  UserServiceControllerMethods,
} from '@app/common/proto/user';
import { Observable } from 'rxjs';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(private readonly userService: UserService) {}

  getUser(
    request: GetUserRequest,
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse {
    return this.userService.getUser(request.name);
  }

  createUser(
    user: CreateUserRequest,
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse {
    return this.userService.createUser(user);
  }

  makeFriends(
    request: MakeFriendsRequest,
  ): Promise<EmptyResponse> | Observable<EmptyResponse> | EmptyResponse {
    return this.userService.makeFriends(request.user1Name, request.user2Name);
  }
}
