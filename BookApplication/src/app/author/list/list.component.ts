import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthor } from 'src/app/core/interfaces/author.interface';
import { Author } from 'src/app/core/entities/author.entity';
import { Book } from 'src/app/core/entities/book.entity';
import { Genre } from 'src/app/core/entities/genre.entity';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authorsList: Array<IAuthor>;
  constructor(
    public http: HttpClient
  ) {
    this.authorsList = new Array<Author>();
   }

  ngOnInit() {
    this.getListAuthors();
  }
  private getListAuthors(): void {
    this.http.get('assets/api/booksInfo.json')
    .subscribe(
        (res: any) => {
          console.log(res);
          const self: any = this;
          res.authors.forEach(function(value, i) {
            console.log('%d: %s', i, value);
            self.authorsList.push(value);
            self.authorsList[i].books = new Array<Book>();
            res.books.forEach( book => {
              if (book.groupId.indexOf(value.groupId) >= 0) {
                self.authorsList[i].books.push(book);
              }
            });
            self.authorsList[i].genres = new Array<Genre>();
            res.genres.forEach( book => {
              if (book.groupId.indexOf(value.groupId) >= 0) {
                self.authorsList[i].genres.push(book);
              }
            });
            console.log(' self.authorsList ' + self.authorsList);
          });
    });
  }

}
