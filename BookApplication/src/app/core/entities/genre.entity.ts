import { IGenre } from '../interfaces/genre.interface';
import { Book } from './book.entity';
import { Author } from './author.entity';

export class Genre implements IGenre {
    genreId = '';
    genreName = '';
    groupId = '';
    authors = Array<Author>();
    books = Array<Book>();
}
