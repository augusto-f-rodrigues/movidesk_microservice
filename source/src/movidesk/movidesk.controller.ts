import { Controller, Get, Body, Patch, Param, Post } from '@nestjs/common';
import { MovideskService } from './movidesk.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { TicketFilterDto } from './dto/ticket-filter.dto';

/**
 * Controller to handle Movidesk requests
 * @class MovideskController
 */
@Controller('movidesk/ticket')
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
  

  @Post('/getAll')
  async getAllTickets(@Body() filterTicketDTO){
    return await this.movideskService.getAll(filterTicketDTO);
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
