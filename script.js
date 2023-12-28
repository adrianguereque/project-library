function openPopup() {
    document.getElementById("overlay").style.display = "flex";
}

function closePopup() {
    document.getElementById("overlay").style.display = "none";
    clearValues();
}

const theHobbit = new Book("Lord of the Rings","Tolkien",256,1);
const DCC = new Book("Dungeon Crawler Carl","Aussie",345,1);
const myLibrary = [theHobbit, DCC];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookCard(title, author, pages, read) {
    // Create the main container div
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book');

    // Create the title element
    const titleElement = document.createElement('h2');
    titleElement.classList.add('book-title');
    titleElement.textContent = title;

    // Create the author element
    const authorElement = document.createElement('h3');
    authorElement.classList.add('author');
    authorElement.textContent = author;

    // Create the pages element
    const pagesElement = document.createElement('p');
    pagesElement.classList.add('pages');
    pagesElement.textContent = 'Pages: ' + pages;

    // Create the status element
    const statusElement = document.createElement('p');
    statusElement.classList.add('status');
    statusElement.textContent = (read ? "Read" : "Not read");

    // Append all elements to the book container
    bookContainer.appendChild(titleElement);
    bookContainer.appendChild(authorElement);
    bookContainer.appendChild(pagesElement);
    bookContainer.appendChild(statusElement);

    // Append the book container to the books section
    const booksSection = document.querySelector('.books');
    booksSection.appendChild(bookContainer);
}


window.onload = function() {
    for(let i=0; i<myLibrary.length; i++)
    addBookCard(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read)

};
function clearValues(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;
}


const formSubmit = document.querySelector('.submit');
formSubmit.addEventListener('click', handleSubmit);
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    if (title && author && pages) {
        // All required fields are filled, proceed with submission
        myLibrary.push(new Book(title, author, pages, read));
        addBookCard(title, author, pages, read);
        closePopup();
        clearValues();
    } else {
        // Display an error message or take appropriate action for invalid form
        alert('Please fill in all required fields.');
    }

}