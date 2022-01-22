//variables
let myLibrary = [];

//selectors / event listeners
const Form = document.querySelector(".new-book-form");
const openForm = document.querySelector("#open-form");
const closeForm = document.getElementsByTagName('span')[0];
openForm.addEventListener("click", () => Form.style.visibility = "visible");
closeForm.addEventListener("click", () => Form.style.visibility = "hidden");

const addBook = document.getElementById("add-btn");
addBook.addEventListener('click', addBookToLibrary);

let emptyField = 0;

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
  if(emptyField === 1) {
    return;
  }
  
  const title = document.getElementById("form-title");
  const author = document.getElementById("form-author");
  const pages = document.getElementById("form-pages");
  const read = document.getElementById("form-read");

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  Form.style.visibility = "hidden";
  Form.reset();
}

function validateForm() {
  let titleField = document.forms["form"]["title"].value;
  let authorField = document.forms["form"]["author"].value;
  let pagesField = document.forms["form"]["pages"].value;
  if (authorField == "" || titleField == '' || pagesField == '') {
    alert("Empty fields must be filled out, press the Add Button again");
    emptyField = 1;
  } else emptyField = 0;
}