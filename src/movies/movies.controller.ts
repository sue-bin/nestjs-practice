import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie, PartialMovie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // name in this blanket is entry point // router
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAllMovies(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id') // :id => get data for id
  getOne(@Param('id') id: string): Movie {
    //ask for id with Param decorator
    return this.moviesService.getOne(+id);
  }

  @Post()
  create(@Body() movieData: Movie) {
    return this.moviesService.createMovieData(movieData);
  }

  @Delete(':id')
  deleteOne(@Param('id') movieId: string): boolean {
    return this.moviesService.deleteOne(+movieId);
  }

  @Patch(':id') //update some part of resource
  update(@Param('id') movieId: string, @Body() movieData: PartialMovie) {
    return this.moviesService.updateMovie(+movieId, movieData);
  }

  @Get('search')
  search(@Query('year') year: number) {
    return `We are search for a movie created in : ${year}`;
  }
}
