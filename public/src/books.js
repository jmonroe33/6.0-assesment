function findAuthorById(authors, id) {
  let myAuthor = authors.find((author) => author.id === id);
  console.log(myAuthor);
  return myAuthor;
}

function findBookById(books, id) {
  let myBook = books.find((book) => book.id === id);
  return myBook;
}

function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = books.filter((book) => book.borrows[0].returned);
  let borrowed = books.filter((book) => !book.borrows[0].returned);
  return [[...borrowed], [...returnedBooks]];
  // return filteredBooks;
}

function getBorrowersForBook(book, accounts) {
  // let test = [];
  // accounts.forEach((acc) => {
  //   book.borrows.forEach((loneBook) => {
  //     acc.returned = loneBook.returned;
  //     if (loneBook.id === acc.id) test.push(acc);
  //   });
  // });

  let test = accounts.filter((acc) => {
    return book.borrows.find((loneBook) => {
      acc.returned = loneBook.returned;
      return loneBook.id === acc.id;
    });
  });

  return test.slice(0, 10);
  //
  //match books id to accounts  if matches
  // return status of each
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
// let test = [];
// accounts.forEach((acc) => {
//   book.borrows.forEach((loneBook) => {
//     acc.returned = loneBook.returned;
//     if (loneBook.id === acc.id) test.push(acc);
//   });
// });
