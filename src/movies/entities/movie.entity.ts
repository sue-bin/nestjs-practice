export type Movie = {
  id?: number;
  name: string;
  year: number;
  genres: string[];
  director: string;
};

export type PartialMovie = {
  name?: string;
  year?: number;
  genres?: string[];
  director?: string;
};
