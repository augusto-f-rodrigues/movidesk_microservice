import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MovideskService } from './movidesk.service';
import { CreateMovideskDto } from './dto/create-movidesk.dto';
import { UpdateMovideskDto } from './dto/update-movidesk.dto';

@Controller('movidesk')
export class MovideskController {
  constructor(private readonly movideskService: MovideskService) {}

  @Post()
  create(@Body() createMovideskDto: CreateMovideskDto) {
    return this.movideskService.create(createMovideskDto);
  }

  @Get()
  findAll() {
    return this.movideskService.findAll();
  }

  @Get(':id')
  getTicket(@Param('id') id: string) {
    return this.movideskService.getTicket(id);
  }

  @Patch(':id')
  updateTicket(
    @Param('id') id: string,
    @Body() updateMovideskDto: Movidesk.CustomFieldValue[],
  ) {
    return this.movideskService.updateTicket(id, updateMovideskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movideskService.remove(+id);
  }
}
