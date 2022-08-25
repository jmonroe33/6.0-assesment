let helperTwo = require("./books.js");

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accA, accB) =>
    accA.name.last.toLowerCase() > accB.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows({ id }, books) {
  return books.reduce((total, book) => {
    book.borrows.forEach((borrow) => {
      if (id === borrow.id) {
        total++;
      }
    });
    // console.log(total);
    return total;
  }, 0);
  //How many times has this perosn checked out books?
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  books.forEach((book) => {
    let specificAuthor = helperTwo.findAuthorById(authors, book.authorId);
    console.log(specificAuthor);
    // authors.find((author) => author.id === book.authorId);
    book.author = { ...specificAuthor };
    book.borrows.find((borrowed) => {
      if (borrowed.id === account.id && borrowed.returned === false)
        return result.push(book);
    });
  });
  return result;
}
// return array that has book objects, add the author object that matches the id
// going to need to use the book.authour = author for the matching id
// check to see if author id = book. author id
// check to see if book borrowed.id === account id.
// neet to put the acccount that matches the borrows inside
//get checkout status

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
