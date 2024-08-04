export interface Movie {
  id: string;
  title: string;
  image: string;
  itsFavorite: boolean;
}

export interface MoviesResponse extends Omit<Movie, 'itsFavorite'> {
  original_title: string;
  original_title_romanised: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
}
