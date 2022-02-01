import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController], //get url and run functions //similar to express router
  providers: [MoviesService],
})
export class AppModule {}
