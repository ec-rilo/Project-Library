'use strict';

function Book(title, author, numOfPages, readConfirm) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readConfirm = readConfirm;
    this.info = `${title} by ${author}, ${numOfPages} pages, ${read}`;
}

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');