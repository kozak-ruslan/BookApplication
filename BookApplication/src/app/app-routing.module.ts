import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/list/list.component';
import { BookDetailsComponent } from './book/details/details.component';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { AuthorListComponent } from './author/list/list.component';
import { AuthorDetailsComponent } from './author/details/details.component';
import { GenreComponent } from './genre/genre.component';
import { GenreDetailsComponent } from './genre/details/details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'book',
    component: BookComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: BookListComponent
      },
      {
        path: 'details/:bookId',
        component: BookDetailsComponent
      }
   ]
  },
  {
    path: 'author',
    component: AuthorComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: AuthorListComponent
      },
      {
        path: 'details/:authorId',
        component: AuthorDetailsComponent
      }
   ]
  },
  {
    path: 'genre',
    component: GenreComponent,
    children: [
      {
        path: '',
        redirectTo: 'book',
        pathMatch: 'full'
      },
      {
        path: 'details/:genreId',
        component: GenreDetailsComponent
      }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
