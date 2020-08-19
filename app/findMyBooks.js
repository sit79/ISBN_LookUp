const isbnCollection = require("./data");
const getData = require("./getData");

const findMyBooks = async () => {
  let bookCollection = [];
  try {
    for (const isbn of isbnCollection) {
      let result = await getData(isbn);
      let exists = Object.keys(result).length !== 0;
      const modResult = Object.assign(
        { ISBN: isbn.toString() },
        { found: exists },
        exists ? result : null
      );
      bookCollection.push(modResult);
    }
  } catch (error) {
    console.log(error);
  }
  return bookCollection;
};

module.exports = findMyBooks;
