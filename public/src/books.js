function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
 }
 
 function findBookById(books, id) {
   return books.find((book) => book.id === id)
 }
 
 
 function partitionBooksByBorrowedStatus(books) {
   let returns = [];
   let checkedOut = [];
    books.forEach((book) => {
     const firstTransaction = book.borrows[0];
     if (firstTransaction.returned === false) {
       checkedOut.push(book);
     } else {
       returns.push(book);
     }
   })
   const both = []
   both.push(checkedOut, returns)
   return both
 }
 
 
 function getBorrowersForBook(book, accounts) {
   let borrowList = [];
   let borrows = book.borrows;
   borrows.forEach ((borrow) => {
     accounts.forEach ((account) => {
       if (account.id === borrow.id) {
         account.returned = borrow.returned;
         borrowList.push(account);
       }
     })
   })
 return borrowList.slice(0,10);
 }
 
 

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
