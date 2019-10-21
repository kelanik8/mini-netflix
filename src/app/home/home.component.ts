import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieData;
  
  constructor(public movieService: MovieService) { }

  ngOnInit() {
    console.log(this.movieService.getMovies());
    this.movieData = this.movieService.getMovies()
  }

}
