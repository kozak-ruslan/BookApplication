import { IBook } from '../interfaces/book.interface';
import { Genre } from './genre.entity';
import { Author } from './author.entity';

export class Book implements IBook {
    id = '';
    bookId = '';
    bookName = '';
    groupId = '';
    img = '';
    description = '';
    authors = Array<Author>();
    genres = Array<Genre>();
}
