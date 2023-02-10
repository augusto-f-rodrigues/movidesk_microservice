import { Controller } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { GrpcMethod } from '@nestjs/microservices';
import { ComunicationGetTicketDTO } from '../dto/comunication-get-ticket.dto';
import { CreateTicketDto } from '../dto/create-ticket.dto';
import { TicketFilterDto } from '../dto/ticket-filter.dto';
import { MovideskService } from '../movidesk.service';

@Controller()
export class MovideskGrpcServerController {
  private readonly logger = new Logger(MovideskGrpcServerController.name);

  constructor(private readonly movideskServices: MovideskService) {}

  @GrpcMethod('MovideskService', 'GetTicket')
  async getTicket({ id }: ComunicationGetTicketDTO) {
    const data = await this.movideskServices.getTicket(id);

    this.logger.debug('Data', data);

    return data;
  }

  @GrpcMethod('MovideskService', 'GetAllTickets')
  async getAllTickets(data: TicketFilterDto) {
    console.log('chegou aqui');
    return { data: 'ok' };
  }

  @GrpcMethod('MovideskService', 'UpdateTicket')
  async updateTicket({ id }: ComunicationGetTicketDTO) {
    return await this.movideskServices.updateTicket(id, []);
  }

  @GrpcMethod('MovideskService', 'PostTicket')
  async postTicket(data: CreateTicketDto) {
    return await this.movideskServices.createTicket(data);
  }
}
