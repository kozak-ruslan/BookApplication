import { IBook } from './book.interface';
import { IGenre } from './genre.interface';

export interface IAuthor {
    authorId: string;
    authorName: string;
    biography: string;
    groupId: string;
    img: string;
    books: Array<IBook>;
    genres: Array<IGenre>;
}
