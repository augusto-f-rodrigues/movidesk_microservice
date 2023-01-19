import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { CreateMovideskDto } from './dto/create-movidesk.dto';
import { UpdateMovideskDto } from './dto/update-movidesk.dto';

@Injectable()
export class MovideskService {
  protected logger = new Logger(MovideskService.name);
  constructor(private readonly httpService: HttpService) {}

  create(createMovideskDto: CreateMovideskDto) {
    return 'This action adds a new movidesk';
  }

  findAll() {
    return `This action returns all movidesk`;
  }

  async findOne(id: string) {
    // return `This action returns a #${id} movidesk`;

    const { data } = await lastValueFrom(
      this.httpService.get(
        `https://api.movidesk.com/public/v1/tickets?token=${process.env.MOVIDESK_TOKEN}&id=${id}`,
      ),
    );

    return data;
  }

  update(id: number, updateMovideskDto: UpdateMovideskDto) {
    return `This action updates a #${id} movidesk`;
  }

  remove(id: number) {
    return `This action removes a #${id} movidesk`;
  }
}
