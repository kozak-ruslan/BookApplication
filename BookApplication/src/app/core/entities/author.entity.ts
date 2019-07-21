import { Book } from './book.entity';
import { IAuthor } from '../interfaces/author.interface';
import { Genre } from './genre.entity';

export class Author implements IAuthor {
    authorId = '';
    authorName = '';
    biography = '';
    groupId = '';
    img = '';
    books = Array<Book>();
    genres = Array<Genre>();
}
