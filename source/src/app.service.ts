import { Injectable } from '@nestjs/common';

/**
 * App Service
 * @class AppService
 */
@Injectable()
export class AppService {
  /**
   * Get a message
   * @returns Message
   */
  getHello(): string {
    return 'Hello World!';
  }
}
