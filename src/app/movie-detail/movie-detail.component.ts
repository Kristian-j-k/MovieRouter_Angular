import { Component, OnInit } from '@angular/core';
import { Movie } from '../Shared/Movie';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie : Movie | undefined;
  constructor(private movieService : MovieService, private router : Router, private route : ActivatedRoute ) { }

  ngOnInit() {
    this.movie = this.movieService.getMovie(this.route.snapshot.paramMap.get('Title'));
  }

  public gotoMovies(){
    this.router.navigate(['/movie-list']);
  }

}
