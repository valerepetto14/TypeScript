interface Book {
    id: number;
    title: string;
    author: string;
    coAuthor?: string;
}
declare const book: Book;
interface Person {
    id: number;
    name: string;
}
interface employee extends Person {
}
