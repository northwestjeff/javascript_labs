myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return title + " is a book by " + author + "which is " + pages + " pages. " + read
    }
}

var learn = new Book("Learn Python the Hardway", "Stevens", 200, true);
var gonegirl = new Book("Gone Girl", "Jackson", 360, true);
var thecircle = new Book("The Circle", "Miller", 120, false);


function addBookToLibrary(book) {
    myLibrary.push(book)
}

addBookToLibrary(learn);
addBookToLibrary(gonegirl);
addBookToLibrary(thecircle);

// RENDERS BOOK OBJECTS TO SHELF
function render(array) {
    addBookSection();
    for (i = 0; i < myLibrary.length; i++) {

        // CREATES BOOK
        const shelf = document.getElementById('shelf');
        const div = document.createElement("div");
        shelf.appendChild(div);
        div.className = 'book';
        div.id = i;

        // TITLE SECTION
        const book = document.getElementById(i);
        const bookTitle = document.createElement('h2');
        bookTitle.className = 'title';
        book.appendChild(bookTitle);
        bookTitle.innerHTML = array[i].title;

        //AUTHOR SECTION
        const bookAuthor = document.createElement('h4');
        bookAuthor.className = 'author';
        book.appendChild(bookAuthor);
        bookAuthor.innerHTML = "By: " + array[i].author;

        // PAGES SECTION
        const bookPages = document.createElement('p');
        bookPages.classname = 'pages';
        book.appendChild(bookPages);
        bookPages.innerHTML = array[i].pages + ' pages';

        // READ/UNREAD SECTIONS
        const bookRead = document.createElement('p');
        bookRead.className = 'read';
        book.appendChild(bookRead);
        if (array[i].read) {
            bookRead.innerHTML = 'I have read this book.'
        } else {
            bookRead.innerHTML = 'I have not read this book, yet';
            const bookButton = document.createElement('input');
            bookButton.className = 'read-button';
            bookButton.id = 'read-button';
            bookButton.type = 'button';
            bookButton.value = "Mark Read!";
            book.appendChild(bookButton);
        }
        const removeButton = document.createElement('input');
        removeButton.className = 'remove-button';
        removeButton.type = 'button';
        removeButton.value = "Remove Book from Shelf";
        book.appendChild(removeButton);
    }
    removeBook();

}


render(myLibrary);


function removeBook() {
    const button = document.querySelectorAll('.remove-button');
    for (i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            var indexNum = this.parentNode.id
            myLibrary.splice(indexNum, 1)
            const shelf = document.getElementById("shelf");
            shelf.innerHTML = ""; //DELETES SHELF CONTENTS
            render(myLibrary) //RENDERS SHELF CONTENTS

        })
    }
}
// SUBMIT NEW BOOK TO SHELF
const form = document.querySelector('#new-book-form');
form.onsubmit = function (e) {
    e.preventDefault();
    console.log(form.title.value);
    // INSTANTIATES BOOK OBJECT WITH FORM VALUES PASSED-IN
    addBookToLibrary(new Book(
        form.title.value,
        form.author.value,
        form.pages.value,
        form.read.value
    ));
    const shelf = document.getElementById("shelf");
    shelf.innerHTML = ""; //DELETES SHELF CONTENTS
    render(myLibrary) //RENDERS SHELF CONTENTS
};

function addBookSection() {
    const buttonClick = document.getElementById('new-book-button')
    buttonClick.addEventListener('click', function () {
        const newBookSection = document.getElementById('new-book-form')
        newBookSection.style.display = 'block';
    })
}

// newBookSubmission();
