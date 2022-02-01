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

@Controller('movies') // name in this blanket is entry point // router
export class MoviesController {
  @Get()
  getAllMovies(): string {
    return 'This will return all movies';
  }

  @Get('/:id/:name') // :id => get data for id
  getOne(@Param('id') id: string) {
    //ask for id with Param decorator
    return `This will return one movie with id:${id}`;
  }

  @Post()
  create(@Body() movieData: { name: string; director: string }) {
    const { name, director } = movieData;
    return `This will create movie with name ${name} and director ${director}`;
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return `This will delete the movie with id :${movieId}`;
  }

  @Patch('/:id') //update some part of resource
  update(
    @Param('id') movieId: string,
    @Body() movieData: { name?: string; director?: string }
  ) {
    return `This will update the movie with id :${movieId} and data: ${movieData.name} - ${movieData.director}`;
  }

  @Get('search')
  search(@Query('year') year: number) {
    return `We are search for a movie created in : ${year}`;
  }
}
