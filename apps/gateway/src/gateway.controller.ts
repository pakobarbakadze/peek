import { Controller, Get, Req, Res } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ClientProxyFactoryService } from './services';

@Controller()
export class GatewayController {
  constructor(private clientProxyFactoryService: ClientProxyFactoryService) {}

  @Get('*')
  async proxy(@Req() req, @Res() res) {
    const { url, method, headers, body } = req;
    const path = url.split('/')[1];

    const client = this.clientProxyFactoryService.getClientProxy(path);

    if (!client) {
      return res.status(404).send('Service not found');
    }

    const response = await firstValueFrom(
      client.send('user-action', { url, method, headers, body }),
    );

    return res.status(200).send(response);
  }
}
