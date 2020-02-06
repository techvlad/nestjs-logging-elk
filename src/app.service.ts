import { Injectable } from '@nestjs/common';
import { PinoLogger, InjectPinoLogger } from 'nestjs-pino';

@Injectable()
export class AppService {
  constructor(
    @InjectPinoLogger(AppService.name) private readonly logger: PinoLogger,
  ) {}
  getHello() {
    this.logger.info('Hellow world');
    return { message: 'Hellow world' };
  }
}
