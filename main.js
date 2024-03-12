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
 
  //Hide or show the new book form
  formButton.addEventListener('click', () => {
    if(formContainer.style.display ==='block'){
      formContainer.style.display = 'none';
    }else {
      formContainer.style.display = 'block';
    }
  });

  //Submit the form and add a new book
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    //Create variables
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPage.value;
    let read =  isRead.value;
    
    //Create a new Book
    let newBook = new Book(title, author, pages, read);

    //Add the book to the array
    addBookToLibrary(newBook);
    
    //display the books in myLibrary
    displayBooks();
 
  });




  function displayBooks() {
    myLibrary.forEach((book) => {

      //Create HTML elements
      let card = document.createElement('div');
      let title = document.createElement('p');
      let author = document.createElement('p');
      let pages = document.createElement('p');
      let read = document.createElement('p');
      let removeBtn = document.createElement('button');
      

      //add text to the elements
      title.textContent = `Title: ${book.title}`;
      author.textContent = `Author: ${book.author}`;
      pages.textContent = `No. of Pages ${book.pages}`;
      read.textContent = `Have you read this book?: ${book.isRead}`;
      removeBtn.textContent = 'Remove';

      //Store in a card
      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(pages);
      card.appendChild(read);
      card.appendChild(removeBtn);

      //Assign CSS class 
      removeBtn.classList.add('remove-btn');
      card.classList.add('card');
      
      //Put the card to the div container
      bookContainer.appendChild(card);
  
    });
  }
  

  //Remove button to remove a book

  bookContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('remove-btn')){
      // console.log(`i pop this ${myLibrary.pop()}`);
      console.log(myLibrary);
      console.log("removing a book");
      removeBookFromLibrary();
      console.log(myLibrary);    
    }
  });


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
  if(!myLibrary.includes(book)){
   myLibrary.push(book);
   console.log(myLibrary);

  }

}

function removeBookFromLibrary(book){
  if(myLibrary.includes(book)){
    myLibrary.pop(book);
  }

}



