

// Book object
class Book {
  constructor (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
  }

}



const myLibrary = (function() {

  const library = [];

  //cache DOM
  const bookContainer = document.querySelector('#book-container')
  const newFormBtn = document.querySelector('#form-btn')
  const form = document.querySelector('#book-form');
  const submitBtn= document.querySelector('#submit-btn');

  //bind events
  newFormBtn.addEventListener('click',toggleForm);
  submitBtn.addEventListener('click', handleSubmittedInfo);

  function render() {
    bookContainer.innerHTML = '';
    library.forEach((book) => {
      let card = document.createElement('div');
      card.setAttribute('class','card');

      let title = document.createElement('p');
      title.setAttribute('class','title');
      title.textContent = `Title: ${book.title}`

      let author = document.createElement('p');
      author.setAttribute('class','author');
      author.textContent = `Author: ${book.author}`

      let pages = document.createElement('p');
      pages.setAttribute('class','pages');
      pages.textContent = `No. of pages: ${book.pages}`

      let read = document.createElement('p');
      read.setAttribute('class','is-read');
      read.textContent = `Have you read this?: ${book.read}`

      let removeBtn = document.createElement('button')
      removeBtn.setAttribute('class','remove-btn');
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener('click', () => removeBookFromLibrary(book));


      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(pages);
      card.appendChild(read);
      card.appendChild(removeBtn);



      bookContainer.appendChild(card);
    })
  }


  function toggleForm() {
    return (form.style.display=='none') ? (form.style.display = 'block') : (form.style.display = 'none'); 
  }


  function handleSubmittedInfo(e) {
    e.preventDefault();
    let title = document.querySelector('#book-title').value;
    let author = document.querySelector('#book-author').value;
    let pages = document.querySelector('#book-page').value;
    let read = document.querySelector('input[name="is-read"]:checked').value;

    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
    addBookToLibrary(newBook);
    form.reset();
    render();

  }

  function addBookToLibrary(book) {
    if(!library.includes(book)){
      library.push(book);
      console.log(library);
    }
  }



  function removeBookFromLibrary(book){
    let index = library.indexOf(book);
    if(index > -1) {
      library.splice(index, 1);
    }
    render();
  }



})();





