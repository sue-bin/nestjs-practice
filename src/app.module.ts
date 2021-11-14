import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], //get url and run functions //similar to express router
  providers: [AppService],
})
export class AppModule {}
