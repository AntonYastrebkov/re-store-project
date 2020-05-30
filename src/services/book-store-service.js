export default class BookStoreService {
  
  getBooks() {
    return [
      { 
        id: 1, 
        title: "Lord of the Rings", 
        author: "John R. R. Tolkien",
        price: 42,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/8134AkhQJgL.jpg" },
      { 
        id: 2, 
        title: "Clean Code", 
        author: "Martin Fowler",
        price: 33,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L.jpg" },
      { 
        id: 3, 
        title: "Production-Ready Microservices", 
        author: "Susan J. Fowler",
        price: 22,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg" },
    ];
  }
};