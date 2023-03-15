function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let sum = 0;
  books.forEach((book) => {
    const firstTransaction = book.borrows[0];
    if (!firstTransaction.returned) { 
      sum ++ }  
   })
  return sum
}

function getMostCommonGenres(books) {
  let results = {};
  books.forEach((book) => {
    if (results[book.genre]) {
      results[book.genre]++
    } else {
      results[book.genre] = 1
    }
  })
  let arr = [];
  for (let [key, value] of Object.entries(results)) {
    arr.push({'name' : key, 'count' : value})
  }
  arr.sort((genreA ,genreB) => genreB.count - genreA.count)
  return arr.slice(0,5)
} 

function getMostPopularBooks(books) {
  let arr = [];
  for (const book in books) {
    let {title ,borrows} = books[book];
    arr.push({'name' : title, 'count' : borrows.length})
  }
  arr.sort((bookA ,bookB) => bookB.count - bookA.count)
  return arr.slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  const authorCount = {};
  for (const book in books) {
    let {authorId, borrows} = books[book];
    Object.keys(authorCount).includes(authorId) ? authorCount[authorId]++ : authorCount[authorId] = borrows.length;
  }
 let output = Object.entries(authorCount).sort((most, less) => less[1] - most[1]).slice(0, 5)
 let authorsOutput = [];
  output.forEach((author) => authorsOutput.push({ 'name': parseInt(author[0]), 'count': author[1] }));
 for (const idCount in authorsOutput) {
    let authorName = authorsOutput[idCount].name;
   authorsOutput[idCount].name = Object.values(authors.find((author) => author.id === authorName).name).join(" ");
  }
  return authorsOutput
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
