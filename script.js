const libraryShow = document.querySelector('.show');
const libraryAdd = document.querySelector('.add-book');
libraryAdd.style.display = "none";

const toFormBtn = document.querySelector('.to-form-btn');
const goBackBtn = document.querySelector('.go-back');

toFormBtn.addEventListener('click', () =>{
    libraryAdd.style.display = "initial";
    libraryShow.style.display = "none";
})

goBackBtn.addEventListener('click', () => {
    libraryAdd.style.display = "none";
    libraryShow.style.display = "initial";
})

const bookContents = [
    document.querySelector('.book-title'),
    document.querySelector('.author'),
    document.querySelector('.pages'),
    document.querySelector('.status')
]

const theHobbit = new Book("Lord of the Rings","Tolkien",256,1);
const DCC = new Book("Dungeon Crawler Carl","Aussie",345,1);
const myLibrary = [theHobbit, DCC];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = (read == 1 ? "read" : "not read");
}

Book.prototype.info = function(){
    return this.title + " by " + this.author + ", " + this.pages+ " pages, " +this.read;
}

function addBookToLibrary() {
  let title, author, pages, read;
  // ask them through forms on webpage or smn
  myLibrary.push(new Book(title, author, pages, read));
}

// slide

let i = 0;
let time = 3000;

function changeSlide(){
    bookContents[0].textContent = myLibrary[i].title;
    bookContents[1].textContent = myLibrary[i].author;
    bookContents[2].textContent = myLibrary[i].pages;
    bookContents[3].textContent = myLibrary[i].read;
	if(i < myLibrary.length - 1){
	  i++; 
	} 
    else { 
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeSlide()", time);
}

// Run function when page loads
window.onload=changeSlide;