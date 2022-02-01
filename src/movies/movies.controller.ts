import { Controller, Get } from '@nestjs/common';

@Controller() // name in this blanket is entry point
export class MoviesController {
  @Get()
  getAllMovies(): string {
    return 'This will return all movies';
  }
}
