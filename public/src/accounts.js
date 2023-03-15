function findAccountById(accounts, id) {
  return accounts.find((user) => user.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((userA, userB) => userA.name.last > userB.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  let sum = 0;
  books.forEach((book) => {
  book.borrows.forEach((borrow) => {
    if (account.id === borrow.id) { 
      sum ++; }  
      })
    } 
  )
  return sum
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
   books.forEach((book) => {
     book.borrows.forEach((borrow) => {
       if (!borrow.returned && borrow.id == account.id) {
         book.author = authors.find((author) => author.id == book.authorId)
         result.push(book)
       }
     })
    })
  return result
   }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
