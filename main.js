const myLibrary = [];


document.addEventListener('DOMContentLoaded', () => {

  const formButton = document.querySelector(".form-btn");
  const formContainer = document.getElementById("form-container");
  const submitBtn = document.querySelector(".submit-btn");
  const bookTitle = document.querySelector("#book-title");
  const bookAuthor = document.querySelector("#book-author");
  const bookPage = document.querySelector("#book-page");
  const isRead = document.getElementsByName("is-read");
  const bookContainer = document.querySelector(".book-container");
  const removeBtns = document.querySelectorAll(".remove-btn")

  formButton.addEventListener('click', () => {
    if(formContainer.style.display ==='block'){
      formContainer.style.display = 'none';
    }else {
      formContainer.style.display = 'block';
    }
  });
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPage.value;
    let read =  isRead.value;
    let newBook = new Book(title, author, pages, read);
    console.log(`this is a new book: ${newBook}`);
    addBookToLibrary(newBook);
    displayBooks();
 
  });

  bookContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('remove-btn')){
      console.log(`i pop this ${myLibrary.pop()}`);
    }
  });



  function displayBooks() {
    myLibrary.forEach((book) => {
      let card = document.createElement('div');
      let title = document.createElement('p');
      let author = document.createElement('p');
      let pages = document.createElement('p');
      let read = document.createElement('p');
      let removeBtn = document.createElement('button');
      


      title.textContent = `Title: ${book.title}`;
      author.textContent = `Author: ${book.author}`;
      pages.textContent = `No. of Pages ${book.pages}`;
      read.textContent = `Have you read this book?: ${book.isRead}`;
      removeBtn.textContent = 'Remove';


      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(pages);
      card.appendChild(read);
      card.appendChild(removeBtn);

      removeBtn.classList.add('remove-btn');
      card.classList.add('card');

  
      bookContainer.appendChild(card);
      
      console.log(book);
  
    });
  }
  

});






// Book object
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


// book functions

function addBookToLibrary(book) {
  if(!myLibrary.includes(book))
   myLibrary.push(book);
}





