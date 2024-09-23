import { Injectable } from '@nestjs/common';
import UserRepository from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public getUser(name: string) {
    return this.userRepository.getUser(name);
  }

  public createUser(user: any): Promise<any> {
    return this.userRepository.createUser(user);
  }

  public makeFriends(user1Name: string, user2Name: string) {
    return this.userRepository.makeFriends(user1Name, user2Name);
  }
}
