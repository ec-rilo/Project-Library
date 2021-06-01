'use strict';

function Book(title, author, numOfPages, readConfirm) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readConfirm = readConfirm;
    this.info = `${title} by ${author}, ${numOfPages} pages, ${readConfirm}`;
}

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');

let bookArr = [theHobbit];
console.log(bookArr);
function addBookToLibrary(bookArr, userBook) {
    bookArr.push(book);
}
