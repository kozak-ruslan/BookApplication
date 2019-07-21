import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/core/entities/book.entity';
import { Author } from 'src/app/core/entities/author.entity';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { Genre } from 'src/app/core/entities/genre.entity';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class BookDetailsComponent implements OnInit {
  private id: string;
  bookDetails: Book;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.id = route.snapshot.paramMap.get('bookId');
    console.log(this.id);
  }

  ngOnInit() {
    this.getBookDetails();
  }
  private getBookDetails() {
    this.http.get('assets/api/booksInfo.json')
      .subscribe(
          (res: any) => {
            res.books.forEach((element: IBook) => {
              if (element.bookId.indexOf(this.id) >= 0) {
                this.bookDetails = element;
              }
            });
            this.bookDetails.authors = new Array<Author>();
            res.authors.forEach(element => {
              if (element.groupId.indexOf(this.bookDetails.groupId) >= 0) {
                this.bookDetails.authors.push(element);
              }
            });
            this.bookDetails.genres = new Array<Genre>();
            res.genres.forEach(element => {
              if (element.groupId.indexOf(this.bookDetails.groupId) >= 0) {
                this.bookDetails.genres.push(element);
              }
            });
      });
  }

}
