  // importing the controller in index file 

const bookController = require("../bookController/controller");

  const{addBook, displaying ,removingBook} = require("../bookController/controller")


  // adding the new book to the database
  const bookTobeAdde={

    id: 6,
    title: 'The  Gatsby',
    author: ' Scott Fitzgerald',
    year: 1993 ,
  };
  

 addBook(bookTobeAdde);
 displaying();
 removingBook(2);
 updatingBook(3 ,"year",80000 )
 
