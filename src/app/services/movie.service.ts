import { Injectable } from '@angular/core';
import { Movie } from '@app/interface/movie.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // public movies:Movie[] = [];
  private moviesSubject = new BehaviorSubject<Movie[]>([]);

  set movies(movies: Movie[]) {
    this.moviesSubject.next(movies);
  }

  get movies(): Observable<Movie[]> {
    return this.moviesSubject.asObservable();
  }

  public getMoviesFavorites(): string[] {
    const favorites: string[] = JSON.parse(
      localStorage.getItem('peliculas-favoritas') || '[]'
    );

    return favorites;
  }

  private addOrRemoveMovieFavorite(id: string) {
    let favorites = this.getMoviesFavorites();

    const movie = favorites.find((idFavorite) => idFavorite === id);

    if (movie) {
      favorites = favorites.filter((idFavorite) => idFavorite !== id);
    } else {
      favorites.push(id);
    }

    favorites.push(id);

    localStorage.setItem('peliculas-favoritas', JSON.stringify(favorites));
  }

  toggleFavorite(id: string) {
    const movies = this.moviesSubject.getValue();

    movies.forEach((movie) => {
      if (movie.id === id) {
        movie.itsFavorite = !movie.itsFavorite;
      }
    });

    this.addOrRemoveMovieFavorite(id);
  }
}
