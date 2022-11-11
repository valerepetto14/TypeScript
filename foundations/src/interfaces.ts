interface Book {
    id: number;
    title: string;
    author: string;
    coAuthor?:string;   
}

// const book:Book = {} esto da error porque el objeto no cumple con el formato de la interface

//esta seria la forma correcta y que respeta la interface book
const book: Book = {
    id: 19,
    title:"harry potter",
    author:"valentin repetto",
    coAuthor:"valentin repetto"
} 


//__________________________________________

interface Person {
    id: number;
    name: string;
}

interface employee extends Person {

}