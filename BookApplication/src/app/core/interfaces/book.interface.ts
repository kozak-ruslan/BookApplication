import { IGenre } from './genre.interface';
import { IAuthor } from './author.interface';

export interface IBook {
    id: string;
    bookId: string;
    bookName: string;
    groupId: string;
    img: string;
    description: string;
    authors: Array<IAuthor>;
    genres: Array<IGenre>;
}
