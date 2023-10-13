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

function displayBooks(){
    for(let i=0;i<myLibrary.length;i++){
        console.log(myLibrary[i].info()); // not final, but works
    }
}
displayBooks(); // just to verify for now