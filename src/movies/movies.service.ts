import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie, PartialMovie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`We can not find movie with id: ${id}`);
    }
    return movie;
  }

  deleteOne(id: number): boolean {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return true;
  }

  createMovieData(movieData: Movie) {
    this.movies.push({ ...movieData, id: this.movies.length + 1 });
  }

  updateMovie(id: number, movieData: PartialMovie) {
    this.getOne(id);
    this.movies = this.movies.map((movie) =>
      movie.id !== id ? movie : { ...movie, ...movieData }
    );
  }
}
