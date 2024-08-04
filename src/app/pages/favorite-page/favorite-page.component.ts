import { Component } from '@angular/core';
import { Movie, MoviesResponse } from '@app/interface/movie.interface';
import { MovieService } from '@app/services/movie.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styles: ``,
})
export class FavoritePageComponent {
  public movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.movies.subscribe((data) => {
      this.movies = data.filter((movie) => movie.itsFavorite === true);
    });
  }
}
