'use strict';

function Book(title, author, numOfPages, bookLang, publishDate, readConfirm) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.bookLang = bookLang;
    this.publishDate = publishDate;
    this.readConfirm = readConfirm;
}

let GoT = new Book('A Game Of Thrones', 'George R. R. Martin', '694', 'English', 'publishDate', 'not read yet');

let bookArr = [GoT];
function addBookToLibrary(bookArr, userBook) {
    bookArr.push(book);
}
