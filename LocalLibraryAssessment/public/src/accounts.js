function findAccountById(accounts, id) {
let found = undefined;
  for(let i = 0; i < accounts.length; i++){
    const account = accounts[i]
    if(account.id === id) found = account
  };
return found;
};

const sortAccountsByLastName = accounts => {
accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ?   1 : - 1);
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  const id = account.id;
  let total = 0;
  books.forEach(book => book.borrows.forEach(borrow => id === borrow.id && total++));
  return total;
} 

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows.some(
     act => act.id === account.id && act.returned === false))
      .map(book => { const author = authors.find(author => author.id === book.authorId)
  book.author = author; 
  
  return book }) }
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
