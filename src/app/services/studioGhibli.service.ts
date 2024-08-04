import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MoviesResponse } from '@app/interface/movie.interface';
import { map, Observable } from 'rxjs';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root',
})
export class StudioGlibliService {
  private urlBase = 'https://ghibliapi.vercel.app';

  constructor(private http: HttpClient, private movie: MovieService) {}

  public getMovies(): Observable<Movie[]> {
    return this.http.get<MoviesResponse[]>(`${this.urlBase}/films`).pipe(
      map((data) => {
        const favorites = this.movie.getMoviesFavorites();

        const newData: Movie[] = data.map((movie) => {
          const itsFavorite = !!favorites.find((id) => id === movie.id);
          return {
            id: movie.id,
            title: movie.title,
            image: movie.image,
            itsFavorite: itsFavorite,
          };
        });
        return newData;
      })
    );
  }
}
