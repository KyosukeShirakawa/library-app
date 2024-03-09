const myLibrary = [];



const formButton = document.querySelector(".form-btn");
const bookForm = document.getElementById("book-form");

formButton.addEventListener('click', () => {
  if( bookForm.style.display ==='block'){
    bookForm.style.display = 'none';
  }else {
    bookForm.style.display = 'block';

  }
  
});


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);

  this.info = function() {
    return 'info';
  }

  Book.prototype.toRead = function() {
    this.read = true;
  }
}

function addBookToLibrary(book) {
  if(!myLibrary.includes(book))
   myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    console.log(book);

  });
}



const lordOfTheRings = new Book('Lord of the rings', 'a nerd guy', 1111, false);

console.log(lordOfTheRings.read);
lordOfTheRings.toRead();
console.log(lordOfTheRings.read);
