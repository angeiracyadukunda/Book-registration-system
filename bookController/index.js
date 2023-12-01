  // importing the controller in index file 

// const  = require("../bookController/controller");

  const{addBook, displaying ,removingBook,updatingManyBooks,updatingBook} = require("../bookController/controller")


  // adding the new book to the database
  const bookTobeAdde={

    id: 6,
    title: 'The  Gatsby',
    author: ' Scott Fitzgerald',
    year: 1993 ,
  };

   var updateManyBook = {
    title: ' Gatsby',
    author:'Scott ',
    year: 888888888,
   }
  

 addBook(bookTobeAdde);
 displaying();
 removingBook(2);
 updatingBook(3 ,"year",80000 );
 updatingManyBooks(5, updateManyBook);


 
