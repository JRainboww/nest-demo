import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { CatsController } from './controller/cats.controller';
import { AppService } from './service/app.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
