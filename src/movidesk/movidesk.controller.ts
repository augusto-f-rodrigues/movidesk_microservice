import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
  findOne(@Param('id') id: string) {
    return this.movideskService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovideskDto: UpdateMovideskDto) {
    return this.movideskService.update(+id, updateMovideskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movideskService.remove(+id);
  }
}
