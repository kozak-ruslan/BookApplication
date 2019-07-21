import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Author } from 'src/app/core/entities/author.entity';
import { IAuthor } from 'src/app/core/interfaces/author.interface';
import { Book } from 'src/app/core/entities/book.entity';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class AuthorDetailsComponent implements OnInit {
  private id: string;
  authorDetails: IAuthor;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.id = route.snapshot.paramMap.get('authorId');
    this.authorDetails = new Author();
    console.log(this.id);
  }

  ngOnInit() {
    this.getAuthorDetails();
  }
  private getAuthorDetails() {
    this.http.get('assets/api/booksInfo.json')
        .subscribe(
            (res: any) => {
              res.authors.forEach(element => {
                if (element.authorId.indexOf(this.id) >= 0) {
                  this.authorDetails = element;
                }
              });
              this.authorDetails.books = new Array<Book>();
              res.books.forEach(element => {
                if (element.groupId.indexOf(this.authorDetails.groupId) >= 0) {
                  this.authorDetails.books.push(element);
                }
              });
        });
  }

}
