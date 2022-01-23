//to do
//toggle read button
//save to local storage

//variables
let myLibrary = [];
let emptyField = 0;

//selectors / event listeners
const Form = document.querySelector(".new-book-form");
const openForm = document.querySelector("#open-form");
const closeForm = document.getElementsByTagName('span')[0];
const addBook = document.getElementById("add-btn");

openForm.addEventListener("click", () => Form.style.visibility = "visible");
closeForm.addEventListener("click", () => Form.style.visibility = "hidden");
addBook.addEventListener('click', addBookToLibrary);

window.addEventListener('DOMContentLoaded', addSampleBooks);

//classes
class Book {
  constructor(title, author, pages, read) {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
    this.read = read.checked;
  }
}

//functions
function addBookToLibrary(e) {
  validateFormFields();
  if(emptyField === 1) return;  

  e.preventDefault();
  const title = document.getElementById("form-title");
  const author = document.getElementById("form-author");
  const pages = document.getElementById("form-pages");
  const read = document.getElementById("form-read");

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  Form.style.visibility = "hidden";
  Form.reset();
  displayBooks();
}

function validateFormFields() {
  let titleField = document.forms["form"]["title"].value;
  let authorField = document.forms["form"]["author"].value;
  let pagesField = document.forms["form"]["pages"].value;
  if (authorField == "" || titleField == '' || pagesField == '') {
    alert("Empty fields must be filled out, press the Add Button again");
    emptyField = 1;
  }
}

function displayBooks() {
  //remove all the books to avoid duplication of books
  const allBooks = document.querySelectorAll('.book');
  allBooks.forEach((book) => book.remove());
  for(let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
}

function createBook(book) {
  const bookShelf = document.querySelector('.bookshelf-container'); 
  const newBook = document.createElement('div');
  const bookTitle = document.createElement('div');
  const bookAuthor = document.createElement('div');
  const bookPages = document.createElement('div');
  const bookRead = document.createElement('button');
  const bookRemove = document.createElement('button');

  //adding of classes/id and appending elements to respective parentElement 
  newBook.classList.add('book');
  bookRemove.setAttribute("id", myLibrary.indexOf(book));

  bookTitle.classList.add('book-title');
  bookTitle.innerHTML = book.title;
  newBook.appendChild(bookTitle);

  bookAuthor.classList.add('book-author');
  bookAuthor.innerHTML = book.author;
  newBook.appendChild(bookAuthor);

  bookPages.classList.add('book-pages');
  bookPages.innerHTML = book.pages + " pages";
  newBook.appendChild(bookPages);

  bookRead.classList.add('book-btn');
  bookRead.setAttribute("id", "read-btn");
  bookRead.innerHTML = 'Read';
  newBook.appendChild(bookRead);

  bookRemove.classList.add('book-btn');
  bookRemove.setAttribute("id", "remove-btn");
  bookRemove.innerHTML = 'Remove';
  newBook.appendChild(bookRemove);

  bookShelf.appendChild(newBook);
}

function addSampleBooks() {
  const book = {
    title: 'Grit',
    author: 'Angela Duckworth',
    pages: 440
  };
  myLibrary.push(book);
}