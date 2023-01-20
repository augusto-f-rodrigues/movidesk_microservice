import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
/**
 * Movidesk Service
 * @class MovideskService
 */
@Injectable()
export class MovideskService {
  /**
   * Logger
   */
  protected logger = new Logger(MovideskService.name);
  /**
   * Constructor
   * @param httpService Http Service to handle requests
   */
  constructor(private readonly httpService: HttpService) {}

  /**
   * Movidesk URL
   * @type {string}
   */
  http: string = process.env.MOVIDESK_URL;

  /**
   * Get a ticket from Movidesk
   * @param id Ticket ID
   * @returns  Ticket typeof Movidesk.TicketResponse
   */
  async getTicket(id: string): Promise<Movidesk.TicketResponse> {
    const { data } = await lastValueFrom<{ data: Movidesk.TicketResponse }>(
      this.httpService.get(
        `${this.http}?token=${process.env.MOVIDESK_TOKEN}&id=${id}`,
      ),
    );

    return data;
  }

  /**
   * Update a ticket from Movidesk
   * @param id Ticket ID
   * @param updateMovideskDto Ticket typeof Movidesk.CustomFieldValue[]
   * @returns Updated ticket typeof Movidesk.TicketResponse
   */
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
}
