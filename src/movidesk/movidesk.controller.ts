import { Controller, Get, Body, Patch, Param, Post } from '@nestjs/common';
import { MovideskService } from './movidesk.service';
import { CreateTicketDto } from './dto/create-ticket.dto';

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
   * Route to get a ticket for Movidesk
   * @param id Ticket ID
   * @returns Ticket
   */
  @Get('/ticket/:id')
  getTicket(@Param('id') id: string) {
    return this.movideskService.getTicket(id);
  }

  /**
   * Route to update a ticket for Movidesk
   * @param id Ticket ID
   * @param updateMovideskDto Ticket data to update
   * @returns Updated ticket
   */

  @Patch('/ticket/:id')
  updateTicket(
    @Param('id') id: string,
    @Body() updateMovideskDto: Movidesk.CustomFieldValue[],
  ) {
    return await this.movideskService.updateTicket(id, updateMovideskDto);
  }

  /**
   * Route to create a ticket for Movidesk
   * @param createTicketDto Ticket data to create
   * @returns Created ticket
   */
  @Post('/ticket')
  postTicket(@Body() createTicketDto: CreateTicketDto) {
    return this.movideskService.createTicket(createTicketDto);
  }
}
