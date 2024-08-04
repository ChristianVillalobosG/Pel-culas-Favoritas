import { Component, Input } from '@angular/core';
// import { movies } from '@app/data/movies';
import { Movie, MoviesResponse } from '@app/interface/movie.interface';


@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styles: ``
})
export class ListMovieComponent {

@Input()
public movies: Movie[] = [];

}
