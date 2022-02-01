import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], //get url and run functions //similar to express router
  providers: [],
})
export class AppModule {}
