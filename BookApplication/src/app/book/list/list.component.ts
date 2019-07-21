import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { Book } from 'src/app/core/entities/book.entity';
import { Author } from 'src/app/core/entities/author.entity';
import { Genre } from 'src/app/core/entities/genre.entity';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class BookListComponent implements OnInit {
  listBooks: Array<IBook>;
  constructor(
    public http: HttpClient
  ) {
    this.listBooks = new Array<Book>();
   }

  ngOnInit() {
    this.getListBooks();
  }
  private getListBooks() {
    this.http.get('assets/api/booksInfo.json')
      .subscribe(
        (res: any) => {
          console.log(res);
          const self: any = this;
          res.books.forEach(function(value, i) {
            console.log('%d: %s', i, value);
            self.listBooks.push(value);
            self.listBooks[i].authors = new Array<Author>();
            res.authors.forEach( author => {
              if (author.groupId.indexOf(value.groupId) >= 0) {
                self.listBooks[i].authors.push(author);
              }
            });
            self.listBooks[i].genres = new Array<Genre>();
            res.genres.forEach( genre => {
              if (genre.groupId.indexOf(value.groupId) >= 0) {
                self.listBooks[i].genres.push(genre);
              }
            });
            console.log(' self.authorsList ' + self.listBooks);
          });
    });
  }

}
