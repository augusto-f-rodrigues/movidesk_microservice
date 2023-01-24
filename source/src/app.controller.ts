import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Controller to handle requests
 * @class AppController
 */
@Controller()
export class AppController {
  /**
   * Constructor
   * @param appService App Service to handle requests
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Route to get a message
   * @returns Message
   * @example 'Hello World!'
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
