import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export default class ClientProxyFactoryService {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  public getClientProxy(host: string): ClientProxy {
    switch (host) {
      case 'user':
        return this.userClient;
      default:
        return null;
    }
  }
}
