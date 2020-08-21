const getData = require("./getData");

const findMyBooks = async (isbnCollection) => {
  let bookCollection = [];

  try {
    for (const isbn of isbnCollection) {
      let result = await getData(isbn);

      // check if object is empty or contains data
      let exists = Object.keys(result).length !== 0;

      /* first step in creating return object,
      result object will be appended (or not)
      and filtered later */
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
