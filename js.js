// function Books(author, title, pages, read, unread) {
//   this.author = author;
//   this.title = title;
//   this.pages = pages;
//   this.read = read;
//   this.unread = unread;
//   this.bookInfo = function everything() {
//     console.log(author, title, pages, read, unread);
//   };
// }

// const newbook = new Books("jkr", "booktest", "32", "Read", "");

// newbook.bookInfo();

// class Books {
//   constructor(author, title, pages, read) {
//     this.author = author;
//     this.title = title;
//     this.pages = pages;
//     this.read = read;
//   }
//   setRead(read) {
//     this.read = read;
//   }
//   setPage(pages) {
//     this.pages = pages;
//   }
// }

// const newbook = new Books("jkr", "booktest", "32", false);
// newbook.setRead(true);
// newbook.setPage(75);

// console.log(newbook.title);
// console.log(newbook.read);
// console.log(newbook.pages);

const mylibrary = [];

const bookTarget = document.querySelector("#books");
const bookAdd = document.querySelector("#addBooks");
const bookTitle = document.querySelector("#title");

function books() {
  console.log(mylibrary);
  let listItems = "";
  mylibrary.forEach(function (book) {
    listItems = listItems + `<li>${book}</li>`;
  });
  bookTarget.innerHTML = listItems;
}

function addBook(title) {
  mylibrary.push(title);
  books();
}

bookAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  console.log(bookTitle.value);
  addBook(bookTitle.value);
});

addBook("Book 1");
addBook("Book 2");
addBook("Book 3");
addBook("Book 4");
books();
