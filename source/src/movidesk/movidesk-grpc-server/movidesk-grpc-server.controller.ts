import { Metadata } from '@grpc/grpc-js';
import { ServerUnaryCall } from '@grpc/grpc-js/build/src/server-call';
import { Controller } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { GrpcMethod } from '@nestjs/microservices';
import { ComunicationGetTicketDTO } from '../dto/comunication-get-ticket.dto';
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

    return { data: data };
  }

  @GrpcMethod('MovideskService', 'GetAllTickets')
  async getAllTickets(data: TicketFilterDto) {
    try {
      return 'OK';
    } catch (e) {
      throw new Error(e);
    }
  }
}
