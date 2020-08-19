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
  } catch (e) {
    console.log(e.name + "\n" + e.message);
  }
  return bookCollection;
};

module.exports = findMyBooks;
