import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovideskModule } from './movidesk/movidesk.module';

@Module({
  imports: [
    MovideskModule,
    ConfigModule.forRoot({
      envFilePath: 'dev.env',
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
