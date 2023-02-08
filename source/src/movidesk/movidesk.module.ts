import { Module } from '@nestjs/common';
import { MovideskService } from './movidesk.service';
import { MovideskController } from './movidesk.controller';
import { HttpModule } from '@nestjs/axios';
import { MovideskGrpcServerController } from './movidesk-grpc-server/movidesk-grpc-server.controller';

@Module({
  imports: [HttpModule.register({})],
  controllers: [MovideskController, MovideskGrpcServerController],
  providers: [MovideskService],
})
export class MovideskModule {}
