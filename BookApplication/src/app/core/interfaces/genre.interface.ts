import { IBook } from './book.interface';
import { IAuthor } from './author.interface';

export interface IGenre {
    genreId: string,
    genreName: string;
    groupId: string;
    books: Array<IBook>;
    authors: Array<IAuthor>;
}
