function getTotalBooksCount(books) {
  let initialValue = 0;
  books.forEach((book) => {
    if (book !== null) initialValue++;
  });
  return initialValue;
}

function getTotalAccountsCount(accounts) {
  let initialValue2 = 0;
  accounts.forEach((account) => {
    if (account !== null) initialValue2++;
  });
  // console.log(initialValue2);
  return initialValue2;
}

function getBooksBorrowedCount(books) {
  // set an increment total to 0
  let total = 0;
  // filter through the books array of objects to target a single books object
  books.filter((book) => {
    // check to see specific books returned status. if false increment the empty total
    if (book.borrows[0].returned === false) return total++;
  });
  // console.log(total);
  return total;
  // if book.borrows.returned === false increment the counter
}

function getMostCommonGenres(books) {
  // needs an empty array
  let genreCounter = {};

  books.forEach((book) => {
    if (genreCounter[book.genre]) {
      genreCounter[book.genre]++;
    } else {
      genreCounter[book.genre] = 1;
    }
  });
  return Object.keys(genreCounter)
    .map((genre) => ({ name: genre, count: genreCounter[genre] }))
    .sort((genreA, genreB) => genreB.count - genreA.count)
    .slice(0, 5);
  // let mostCommonList = Object.keys(genreCounter).map((genre) => {
  //   return { name: genre, count: genreCounter[genre] };
  // });
  // mostCommonList.sort((a, b) => b.count - a.count);
  // mostCommonList.splice(5);
  // return mostCommonList;
}
const bookNamesAndPopularity = (bookArray, emptyArray) => {
  bookArray.forEach((book) => {
    const name = book.title;
    const count = book.borrows.length;
    emptyArray.push({ name, count });
  });
  return emptyArray;
};

function getMostPopularBooks(books) {
  let popularityCounter = [];
  const bookAssembler = bookNamesAndPopularity(books, popularityCounter);
  // assigns each book name
  // books.forEach((book) => {
  //   const name = book.title;
  //   const count = book.borrows.length;
  //   popularityCounter.push({ name, count });
  // });
  // return popularityCounter

  ///////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////
  return bookAssembler
    .sort((bookA, bookB) => bookB.count - bookA.count)
    .slice(0, 5);

  // names of the books should be matched with the count.
  // list of most popular books needs to be ordered least to greatest
  // using the .sort method.
  // should also limit those sorted ones to the top 5. so using the
  // splice or slice methods.

  // books.forEach((book) => {
  //   if popularityCounter[book.borr]
  // })
}

function getMostPopularAuthors(books, authors) {
  const authorCount = books.reduce((acc, { authorId, borrows = [] }) => {
    acc[authorId] = (acc[authorId] || 0) + borrows.length;
    return acc;
  }, {});
  // books.find((book) => {
  //   let authorId = book.authorId;
  //   helper.push({ authorId });
  // });
  return authors
    .map((author) => {
      let authorName = `${author.name.first} ${author.name.last}`;
      return { name: authorName, count: authorCount[author.id] };
    })
    .sort((valueA, valueB) => valueB.count - valueA.count)
    .slice(0, 5);
  // authors.find((author) => {
  //   if (book.id === authors.id) {
  //     newArr.push({ name });
  //   }
  // });
  console.log(helper);
  // idea is to compare books id to authors id,
  //  if true then put the authors name inside of the
  //  add the authors name to the helper
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
