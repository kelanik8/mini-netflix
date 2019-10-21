import {
  Injectable
} from '@angular/core';

interface Movie {
  title: string;
  rating: number;
  hasWatched: boolean;
  runtime: number;
  synopsis: string;
  background: string;
  year: number;
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {
constructor() {}
  movieDB: Movie[] = [
    {
      title: 'Toy Story',
      rating: 4,
      hasWatched: true,
      runtime: 124,
      synopsis: 'A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy\'s room.',
      background: 'url(\'https://pmcvariety.files.wordpress.com/2014/11/toystory3_img10_720.jpg?w=1000&h=563&crop=1\')',
      year: 2010
    },
    {
      title: 'The Incredibles 2',
      rating: 5,
      hasWatched: false,
      runtime: 92,
      // tslint:disable-next-line: max-line-length
      synopsis: 'Helen is called on to lead a campaign to bring Supers back, while Bob navigates the day-to-day heroics of \'normal\' life at home with Violet, Dash and baby Jack-Jack - whose superpowers are about to be discovered.',
      background: 'url(\'https://www.verdict.co.uk/wp-content/uploads/2018/07/incredibles-2-1200-1200-675-675-crop-000000.jpg\')',
      year: 2018
    },
    {
      title: 'Spider-Man: Homecoming',
      rating: 3.5,
      hasWatched: true,
      runtime: 130,
      // tslint:disable-next-line: max-line-length
      synopsis: 'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.',
      background: 'url(\'https://images8.alphacoders.com/815/815755.jpg\')',
      year: 2018
    },
    {
      title: 'The Avengers',
      rating: 2.5,
      hasWatched: false,
      runtime: 118,
      // tslint:disable-next-line: max-line-length
      synopsis: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
      background: 'url(\'https://pmcvariety.files.wordpress.com/2014/04/01-avengers-2012.jpg?w=1000&h=563&crop=1\')',
      year: 2012
    }
  ];

  getMovies(): Movie[] {
    return [...this.movieDB];
  }
}
