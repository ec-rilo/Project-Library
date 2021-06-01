'use strict';

function Book(title, author, numOfPages, bookLang, publishDate, readConfirm) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.bookLang = bookLang;
    this.publishDate = publishDate;
    this.readConfirm = readConfirm;
}

let GoT = new Book('A Game Of Thrones', 'George R. R. Martin', '694', 'English', 'July 1, 1996', 'not read yet');

let bookArr = [GoT];
function addBookToLibrary(bookArr, userBook) {
    bookArr.push(book);
}


const booksContainer = document.querySelector('.books-container');
function displayBooks() {
    for (let i = 0; i < bookArr.length; ++i) {
        let bookCardContainer = document.createElement('div');
        bookCardContainer.classList.add(`book${i + 1}`);
        bookCardContainer.classList.add('card-container');

        let rmCardBtn = document.createElement('div');
        rmCardBtn.classList.add('remove-card-btn');
        rmCardBtn.innerHTML = 'x';
        bookCardContainer.appendChild(rmCardBtn);

        let cardTextContainer = document.createElement('ul');
        cardTextContainer.classList.add('card-text-container');

        let bookTitle = document.createElement('li');
        bookTitle.classList.add('card-book-title');
        bookTitle.innerHTML = bookArr[i].title;
        cardTextContainer.appendChild(bookTitle);

        let authorInfo = document.createElement('li');
        authorInfo.classList.add('card-content');
        authorInfo.innerHTML = 'By: ' + bookArr[i].author;
        cardTextContainer.appendChild(authorInfo);

        let pageInfo = document.createElement('li');
        pageInfo.classList.add('card-content');
        pageInfo.innerHTML = 'Number of pages: ' + bookArr[i].numOfPages;
        cardTextContainer.appendChild(pageInfo);

        let bookLangInfo = document.createElement('li');
        bookLangInfo.classList.add('card-content');
        bookLangInfo.innerHTML = 'Language: ' + bookArr[i].bookLang;
        cardTextContainer.appendChild(bookLangInfo);

        let bookPublishDate = document.createElement('li');
        bookPublishDate.classList.add('card-content');
        bookPublishDate.innerHTML = 'Published: ' + bookArr[i].publishDate;
        cardTextContainer.appendChild(bookPublishDate);

        bookCardContainer.appendChild(cardTextContainer);
        booksContainer.appendChild(bookCardContainer);
    }
}

displayBooks();