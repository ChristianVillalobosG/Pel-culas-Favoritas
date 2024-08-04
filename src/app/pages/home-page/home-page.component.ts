import { Component } from '@angular/core';
import { Movie, MoviesResponse } from '@app/interface/movie.interface';
import { MovieService } from '@app/services/movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: ``,
})
export class HomePageComponent {
  public movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.movies.subscribe((data) => {
      if (data.length > 0) {
        this.movies = data;
      }
    });
  }
}
