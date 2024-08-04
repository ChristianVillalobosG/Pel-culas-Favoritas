import { Component } from '@angular/core';
import { StudioGlibliService } from './services/studioGhibli.service';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    private studioGlibliService: StudioGlibliService,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.studioGlibliService.getMovies().subscribe((movies) => {
      this.movieService.movies = movies;
    });
  }
}
