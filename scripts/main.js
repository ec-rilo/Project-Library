'use strict';

class Book {
    constructor(title, author, numOfPages, bookLang, publishDate, readConfirm) {
        this.title = title;
        this.author = author;
        this.numOfPages = numOfPages;
        this.bookLang = bookLang;
        this.publishDate = publishDate;
        this.readConfirm = readConfirm;
    }
}


let book1 = new Book('A Game Of Thrones', 'George R. R. Martin', '694', 'English', 'July 1, 1996', 'Not read yet');

let book2 = new Book('Atomic Habits', 'James Clear', '322', 'English', 'Date #, ####', 'Read');

let book3 = new Book('Congo', 'Micheal Crichton', '339','English', 'Date #, ####', 'Read')

let bookArr = [book1, book2, book3];

const booksContainer = document.querySelector('.books-container');
function displayBooks() {
    for (let i = 0; i < bookArr.length; ++i) {
        createBookCard(i);
        let readConfirm = bookArr[i].readConfirm;
        let toggle = document.getElementById(`toggle-container-${i + 1}`);
        console.log(readConfirm);
        if (readConfirm === 'Read'){
            toggle.checked = true;
        }
    }
}

displayBooks();

function createBookCard(i) {
    let bookCardContainer = document.createElement('div');
    bookCardContainer.classList.add('card-container');
    bookCardContainer.dataset.bookNum = `${i}`;

    let rmCardBtn = document.createElement('button');
    rmCardBtn.classList.add('remove-card-btn');
    rmCardBtn.setAttribute('type', 'button');
    rmCardBtn.innerHTML = 'x';
    rmCardBtn.dataset.bookObjIndex = `${i}`;
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

    let toggleMaster = document.createElement('div');
    toggleMaster.setAttribute('class', 'toggle-master');
    let toggleLabel = document.createElement('label');
    toggleLabel.setAttribute('for', `toggle-container-${i + 1}`);
    toggleLabel.innerHTML = 'Mark as read: ';
    toggleMaster.appendChild(toggleLabel);
    let toggleContainer = document.createElement('input');
    toggleContainer.setAttribute('type', 'checkbox');
    toggleContainer.setAttribute('id', `toggle-container-${i + 1}`);
    toggleContainer.setAttribute('class', 'toggle-container');
    toggleMaster.appendChild(toggleContainer);
    cardTextContainer.appendChild(toggleMaster);
        
    bookCardContainer.appendChild(cardTextContainer);
    booksContainer.appendChild(bookCardContainer);
}

function removeSingleCard() {
    let rmCardBtnArr = Array.from(document.querySelectorAll('.remove-card-btn'));
    rmCardBtnArr.forEach(button => {
        button.addEventListener('click', () => {
            let bookObjIndex = button.getAttribute('data-book-obj-index');
            bookArr.splice(bookObjIndex, 1);

            let cardArr = document.querySelectorAll('.card-container');
            cardArr.forEach(card => card.remove());
            displayBooks();
            cardArr = document.querySelectorAll('.card-container');
            rmCardBtnArr = Array.from(document.querySelectorAll('.remove-card-btn'));
            removeSingleCard();
        });
    });
}

removeSingleCard();

function removeTransition() {
    addBookBtn.classList.remove('add-book-btn-action');
}

let addBookBtn = document.querySelector('.add-book-btn-container');
addBookBtn.addEventListener('mouseover', () => {
    addBookBtn.classList.add('add-book-btn-action');
});
addBookBtn.addEventListener('mouseout', removeTransition);

function openForm() {
    let form = document.querySelector('.form-popup');
    let elems = document.querySelectorAll(`body > *:not(.form-popup)`);
    
    form.style.display = 'block';
    elems.forEach((elem) => {
        elem.style.filter = 'blur(3px)';
    });

    let overlay = document.querySelector('.overlay');
    overlay.classList.add('black-overlay');
}

let closeBtn = document.querySelector('.close-form-btn');
closeBtn.addEventListener('click', closeForm);

function closeForm() {
    let formUI = document.querySelector('.form-container');
    let form = document.querySelector('.form-popup');
    let elems = document.querySelectorAll(`body > *:not(.form-popup)`);
    formUI.reset();

    form.style.display = 'none';
    elems.forEach((elem) => {
        elem.style.filter = 'blur(0)';
    });

    let overlay = document.querySelector('.overlay');
    overlay.classList.remove('black-overlay');
}

function addBookToLibrary(book) {
    bookArr.push(book);
}

// Adds a new book on form submission.
let formContainer = document.querySelector('.form-container');
formContainer.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let numOfPages = document.getElementById('num-of-pages').value;
    let bookLang = document.getElementById('book-lang').value;
    let bookPubDate = document.getElementById('book-publish-date').value;
    let readConfirm = document.getElementById('read-status').value;
    let readValue = readConfirm === 'Read' ? true : false;

    let book = new Book(title, author, numOfPages, bookLang, bookPubDate, readConfirm);
    bookArr.push(book);

    let cardArr = document.querySelectorAll('.card-container');
    cardArr.forEach(card => card.remove());
    displayBooks();
    
    removeSingleCard();
    closeForm();
});