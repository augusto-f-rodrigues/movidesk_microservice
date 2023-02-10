import { Module } from '@nestjs/common';
import { MovideskService } from './movidesk.service';
import { MovideskController } from './movidesk.controller';
import { HttpModule } from '@nestjs/axios';
import { MovideskGrpcServerController } from './movidesk-grpc-server/movidesk-grpc-server.controller';
import { OpenDataProtocolService } from '../providers/openDataProtocol.service';

@Module({
  imports: [HttpModule.register({})],
  controllers: [MovideskController, MovideskGrpcServerController],
  providers: [
    MovideskService,
    {
      provide: 'OData',
      useClass: OpenDataProtocolService,
    },
  ],
})
export class MovideskModule {}
