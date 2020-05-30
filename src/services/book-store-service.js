export default class BookStoreService {
  
  getBooks() {
    return [
      { 
        id: 1, 
        title: "Lord of the Rings", 
        author: "John R. R. Tolkien" },
      { 
        id: 2, 
        title: "Clean Code", 
        author: "Martin Fowler" },
      { 
        id: 3, 
        title: "Production-Ready Microservices", 
        author: "Susan J. Fowler" },
    ];
  }
};