import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/list/list.component';
import { BookDetailsComponent } from './book/details/details.component';
import { AuthorComponent } from './author/author.component';
import { AuthorListComponent } from './author/list/list.component';
import { AuthorDetailsComponent } from './author/details/details.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenreComponent } from './genre/genre.component';
import { GenreDetailsComponent } from './genre/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    BookDetailsComponent,
    AuthorComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    GenreComponent,
    GenreDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
