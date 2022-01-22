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
  validateForm();
  if(emptyField === 1) return;  
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

function validateForm() {
  let titleField = document.forms["form"]["title"].value;
  let authorField = document.forms["form"]["author"].value;
  let pagesField = document.forms["form"]["pages"].value;
  if (authorField == "" || titleField == '' || pagesField == '') {
    alert("Empty fields must be filled out, press the Add Button again");
    emptyField = 1;
  }
}

function displayBooks() {
  //delete existing list then create it again if a book gets deleted
  for(let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
}


//sundae sched
//fix logic flow of adding elements to DOM
function createBook(book) {
  //access book related elements
  //attach respective classes to each element
  const bookShelf = document.querySelector('.bookshelf-container'); 
  const displayBook = document.querySelector('.book');
  const newBook = document.createElement('div');
  const bookTitle = document.createElement('div');
  const bookAuthor = document.createElement('div');
  const bookPages = document.createElement('div');
  const bookRead = document.createElement('button');
  const bookRemove = document.createElement('button');
  const newSpan = document.createElement('span');

  //fix logic flow 
  
  newBook.classList.add('book');

  //add id based on index in myLibrary array

  //do this for each element and append to parent element
  //remove span and put text directly to div
  bookTitle.classList.add('book-title');
  const titleSpan = newSpan;
  newSpan.innerHTML = book.title;
  bookTitle.appendChild(titleSpan);
  bookTitle.innerHTML = book.title;
  console.log(bookTitle)
  displayBook.appendChild(bookTitle);


  bookAuthor.classList.add('book-author');

  bookPages.classList.add('book-pages');

  bookRead.classList.add('book-btn');

  bookRemove.classList.add('book-btn');
}