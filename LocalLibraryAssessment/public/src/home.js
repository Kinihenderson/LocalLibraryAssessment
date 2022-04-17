/*function getTotalBooksCount(books) {
  return books.length;
}*/

function getTotalBooksCount(books) {
  count = books.reduce((acct, book) =>
  {acct++; return acct;}, 0) 
  return count;

}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let numBooksBorrowed = 0;

books.forEach(book => {
    if (book.borrows[0].returned === false) numBooksBorrowed++;
  });
return numBooksBorrowed;
}

function getMostCommonGenres(books) {
  const bookGenres = books.map(book => book.genre);
  const genreArray = [];

  bookGenres.map((genre) => {
    const genreLocation = genreArray.findIndex((element) => element.name === genre);
    if (genreLocation >= 0) {
      genreArray[genreLocation].count = genreArray[genreLocation].count + 1;
         } else {
      genreArray.push({ name: genre, count: 1 });
    }
  });
  return sortAndShorten(genreArray);
}

function getMostPopularBooks(books) {
  const borrows = books.map(book=>({name:book.title, count:book.borrows.length}));
  
return sortAndShorten(borrows);
}

function sortAndShorten(array) {
  let newArray = array.sort((a, b) => b.count - a.count).slice(0, 5)
  
  return newArray;
  }

function getMostPopularAuthors(books, authors) {
  let result = [];

  authors.forEach((author) => {
   let authorObject = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };

   books.forEach((book) => {
    if (book.authorId === author.id) {
     authorObject.count += book.borrows.length;
    }
   });
    result.push(authorObject);
  });
return sortAndShorten(result);
 }



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
