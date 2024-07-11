import { All, Controller, Req, Res } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ClientProxyFactoryService } from './services';

@Controller()
export class GatewayController {
  constructor(private clientProxyFactoryService: ClientProxyFactoryService) {}

  @All('*')
  async proxy(@Req() req, @Res() res) {
    const { url, method, body } = req;
    const path = url.split('/')[1];

    const client = this.clientProxyFactoryService.getClientProxy(path);

    if (!client) {
      return res.status(404).send('Service not found');
    }

    const response = await firstValueFrom(
      client.send(method.toLowerCase(), body),
    );

    return res.status(200).send(response);
  }
}
