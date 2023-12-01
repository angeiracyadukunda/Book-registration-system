// importing the database 
const {booksDatabase} = require("../Db/booksDb");


// add the new book to the database

const addBook =()=>{

   const newBook = booksDatabase.length+1;
    booksDatabase.push(newBook);

    console.log("\nBook added");
     console.log(booksDatabase);
    
}

// displaying the the books in the database
const displaying=()=>{

    const displayingBooksInDatabase = booksDatabase;

      
    console.log(booksDatabase);
  }
   // removing the book from the database

  const  removingBook = (id)=>{

    // const existingBook = [];
    existingBook=booksDatabase.filter(element=> element.id===id)
    var remainingBook=[];
    if(!existingBook){
        console.log("\n Book not found");
        // console.log(existingBook)
    }
    else{
    remainingBook=booksDatabase.filter(element=> element.id!==id);

    console.log("\n Book removed");
    console.log(remainingBook);
    }
  }
 // updating the book in the database

 const updatingBook = (id, key,newBook )=>{

    // checking if the id exists
    var existingBook
    existingBook=booksDatabase.find(element=> element.id===id);

    if(!existingBook){
        console.log("\n Book not found");
    }
    else{

        existingBook[key]=newBook;

        console.log("\n the book has been updated");
        console.log(existingBook)
    }
 }


 // updating many  books in the database

 const updatingManyBooks = (id,  many)=>{

    const existingBook=booksDatabase.find(element=> element.id===id);
    if(!existingBook){
        console.log("\n Book not found");
        
    }else{

        for(key in many){

         existingBook[key]=many[key];

         console.log("\n many book  has been updated");
         console.log(existingBook)
        }
    }
 }



module.exports={
    addBook,
    displaying,
    removingBook,
    updatingBook,
    updatingManyBooks
}

