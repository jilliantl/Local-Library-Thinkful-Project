// USED FIND()
function findAccountById(accounts, id) {
  return accounts.find((user) => user.id === id);
}

// USED SORT
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

// CREATED HELPER FUNCTION
function getAccountId(account) {
  return account.id
}

// USED HELPER FUNCTION
function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  let accountId = getAccountId(account);
   books.forEach((book) => {
     book.borrows.forEach((borrow) => {
       if (!borrow.returned && borrow.id == accountId) {
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

