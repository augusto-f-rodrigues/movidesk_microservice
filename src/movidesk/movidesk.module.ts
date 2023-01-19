import { Module } from '@nestjs/common';
import { MovideskService } from './movidesk.service';
import { MovideskController } from './movidesk.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({})],
  controllers: [MovideskController],
  providers: [MovideskService],
})
export class MovideskModule {}
