import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { MovideskService } from './movidesk.service';

/**
 * Controller to handle Movidesk requests
 * @class MovideskController
 */
@Controller('movidesk')
export class MovideskController {
  /**
   * Constructor
   * @param movideskService Movidesk Service to handle requests
   */
  constructor(private readonly movideskService: MovideskService) {}

  /**
   *  Route to get a ticket from Movidesk
   * @param id Ticket ID
   * @returns Ticket
   */
  @Get(':id')
  async getTicket(@Param('id') id: string) {
    return await this.movideskService.getTicket(id);
  }

  /**
   * Route to update a ticket from Movidesk
   * @param id Ticket ID
   * @param updateMovideskDto Ticket data to update
   * @returns Updated ticket
   */
  @Patch(':id')
  async updateTicket(
    @Param('id') id: string,
    @Body() updateMovideskDto: Movidesk.CustomFieldValue[],
  ) {
    return await this.movideskService.updateTicket(id, updateMovideskDto);
  }
}
