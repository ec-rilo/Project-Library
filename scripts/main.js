'use strict';


function Book(title, author, numOfPages, bookLang, publishDate, readConfirm) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.bookLang = bookLang;
    this.publishDate = publishDate;
    this.readConfirm = readConfirm;
}

let GoT = new Book('A Game Of Thrones', 'George R. R. Martin', '694', 'English', 'July 1, 1996', 'Not read yet');

let aHabits = new Book('Atomic Habits', 'James Clear', '322', 'English', 'Date #, ####', 'Read');

let congo = new Book('Congo', 'Micheal Crichton', '339','English', 'Date #, ####', 'Read')

let bookArr = [GoT, aHabits, congo];
function addBookToLibrary(book) {
    bookArr.push(book);
}

const booksContainer = document.querySelector('.books-container');
function displayBooks() {
    for (let i = 0; i < bookArr.length; ++i) {
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
        toggleLabel.setAttribute('for', 'toggle-container');
        toggleLabel.innerHTML = 'Mark as read: ';
        toggleMaster.appendChild(toggleLabel);
        let toggleContainer = document.createElement('input');
        toggleContainer.setAttribute('type', 'checkbox');
        toggleContainer.setAttribute('id', 'toggle-container');
        toggleMaster.appendChild(toggleContainer);
        cardTextContainer.appendChild(toggleMaster);

        bookCardContainer.appendChild(cardTextContainer);
        booksContainer.appendChild(bookCardContainer);
    }
}

displayBooks();

function removeCard() {
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
            removeCard();
        });
    });
}

removeCard();

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
    let form = document.querySelector('.form-popup');
    let elems = document.querySelectorAll(`body > *:not(.form-popup)`);

    form.style.display = 'none';
    elems.forEach((elem) => {
        elem.style.filter = 'blur(0)';
    });

    let overlay = document.querySelector('.overlay');
    overlay.classList.remove('black-overlay');
}