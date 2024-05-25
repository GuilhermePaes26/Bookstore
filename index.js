const App = require("./app");

const app = new App();

app.createAuthor("J. R. R. Tolkien", "British", "...");
app.createAuthor("Rick Riordan", "American", "...");

const authors = app.getAuthors();

app.createBook("O Hobbit", "...", "fantasy", 300, authors[0], "...", 19.99, 100);
app.createBook("A Sociedade do Anel", "...", "fantasy", 400, authors[0], "...", 24.99, 100);
app.createBook("O Ladrão de Raios", "...", "fantasy", 500, authors[1], "...", 24.99, 100);
app.createBook("A Pirâmide Vermelha", "...", "fantasy", 600, authors[1], "...", 24.99, 100);
app.createPoster("Justin bieber", "Justin company", 360, 30, 5.99, 100);
const books = app.getBooks();
const poster = app.getPosters();
app.createUser("Guilherme", "Guilherme@email.com", "123456");

const users = app.getUsers();

app.showDatabase();

const items = [
  {
    product: books[0],
    quantity: 2,
  },
  {
    product: books[1],
    quantity: 1,
  },
  {
    product: books[3],
    quantity: 1,
  },
  { product: poster[0], quantity: 2 },
];

app.createOrder(items, users[0]);

app.showDatabase();
