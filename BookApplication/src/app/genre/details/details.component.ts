import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { Book } from 'src/app/core/entities/book.entity';
import { Author } from 'src/app/core/entities/author.entity';
import { Genre } from 'src/app/core/entities/genre.entity';
import { IGenre } from 'src/app/core/interfaces/genre.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class GenreDetailsComponent implements OnInit {
  private id: string;
  genreDetails: IGenre;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.id = route.snapshot.paramMap.get('genreId');
    console.log(this.id);
  }

  ngOnInit() {
    this.getBookDetails();
  }
  private getBookDetails() {
    this.http.get('assets/api/booksInfo.json')
      .subscribe(
          (res: any) => {
            res.genres.forEach((element: IGenre) => {
              if (element.genreId.indexOf(this.id) >= 0) {
                this.genreDetails = element;
              }
            });
            this.genreDetails.authors = new Array<Author>();
            res.authors.forEach(element => {
              if (element.groupId.indexOf(this.genreDetails.groupId) >= 0) {
                this.genreDetails.authors.push(element);
              }
            });
            this.genreDetails.books = new Array<Book>();
            res.books.forEach(element => {
              if (element.groupId.indexOf(this.genreDetails.groupId) >= 0) {
                this.genreDetails.books.push(element);
              }
            });
      });
  }

}
