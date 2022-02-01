import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [AppController, MoviesController], //get url and run functions //similar to express router
  providers: [AppService],
})
export class AppModule {}
