import { Injectable, OnModuleInit } from '@nestjs/common';
import { PinoLogger, InjectPinoLogger } from 'nestjs-pino';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @InjectPinoLogger(AppService.name) private readonly logger: PinoLogger,
  ) {}

  onModuleInit() {
    this.logger.trace('trace here');
    this.logger.debug('debug here');
    this.logger.info('info here');
    this.logger.warn('warn here');
    this.logger.error({ err: new Error('error here') });
    this.logger.fatal('fatal here');
  }

  getHello() {
    return { message: 'Hellow world' };
  }
}
