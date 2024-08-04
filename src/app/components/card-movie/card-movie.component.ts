import { Component, Input } from '@angular/core';
import { Movie } from '@app/interface/movie.interface';
import { MoviesResponse } from '../../interface/movie.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrl: 'card-movie.component.css',
})
export class CardMovieComponent {
  @Input()
  public movie: Movie = {
    id: '',
    image: '',
    title: '',
    itsFavorite: false,
  };

  constructor(private movieService: MovieService) {}

  handleClick(id: string) {
    this.movieService.toggleFavorite(id);
  }
}
