import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { CreateMovideskDto } from './dto/create-movidesk.dto';
import { UpdateMovideskDto } from './dto/update-movidesk.dto';

@Injectable()
export class MovideskService {
  protected logger = new Logger(MovideskService.name);
  constructor(private readonly httpService: HttpService) {}

  http: string = process.env.MOVIDESK_URL;

  create(createMovideskDto: CreateMovideskDto) {
    return 'This action adds a new movidesk';
  }

  findAll() {
    return `This action returns all movidesk`;
  }

  async getTicket(id: string): Promise<Movidesk.TicketResponse> {
    const { data } = await lastValueFrom<{ data: Movidesk.TicketResponse }>(
      this.httpService.get(
        `${this.http}?token=${process.env.MOVIDESK_TOKEN}&id=${id}`,
      ),
    );

    return data;
  }

  async updateTicket(
    id: string,
    updateMovideskDto: Movidesk.CustomFieldValue[],
  ) {
    const { data } = await lastValueFrom<{ data: Movidesk.TicketResponse }>(
      this.httpService.patch(
        `${this.http}?token=${process.env.MOVIDESK_TOKEN}&id=${id}`,
        { customFieldValues: updateMovideskDto },
        {
          headers: { Accept: 'application/json' },
        },
      ),
    );

    return data;
  }

  remove(id: number) {
    return `This action removes a #${id} movidesk`;
  }
}
