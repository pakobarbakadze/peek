import { Injectable } from '@nestjs/common';
import UserRepository from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async createUser(user: any) {
    return this.userRepository.createUser(user);
  }

  public async getUser(name: string) {
    return this.userRepository.getUser(name);
  }
}
