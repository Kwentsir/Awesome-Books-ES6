export default class AwesomeBooks {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.books = [];
  }

  addBook(title, author) {
    const id = this.books.length + 1;
    const book = new AwesomeBooks(title, author, id);
    this.books.push(book);
    this.#save();
  }

  #addBooks(books) {
    books.forEach((book) => {
      this.addBook(book.title, book.author);
    });
  }

  getBooks() {
    return this.books;
  }

  #save() {
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  load() {
    const books = JSON.parse(localStorage.getItem("books"));
    if (books) {
      this.#addBooks(books);
    }
  }

  deleteBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
    this.#save();
  }
}
