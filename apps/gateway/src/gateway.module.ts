import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UserController } from './controllers/user.controller';
import { USER_PACKAGE_NAME } from '@app/common/proto/user';
import { USER_SERVICE } from './types/constants/services.const';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_SERVICE,
        transport: Transport.GRPC,
        options: {
          url: 'user-service:50051',
          package: USER_PACKAGE_NAME,
          protoPath: join(__dirname, '../user.proto'),
        },
      },
    ]),
  ],
  controllers: [UserController],
})
export class GatewayModule {}
