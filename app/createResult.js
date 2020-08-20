const createResult = (bookCollection) => {
  let bookList = [];
  try {
    for (const item of bookCollection) {
      const lookUp = "ISBN:" + item.ISBN;
      const book = item[lookUp];
      const isbn = item.ISBN;
      const found = item["found"];
      let title = "";
      let publisher = "";
      let author = "";
      let date = "";
      if (found) {
        title = book.title !== undefined ? book.title : "";
        publisher =
          book.publishers !== undefined ? book.publishers[0]["name"] : "";
        author = book.authors !== undefined ? book.authors[0]["name"] : "";
        date = book.publish_date !== undefined ? book.publish_date : "";
      }
      let bookResult = { isbn, found, title, author, publisher, date };
      bookList.push(bookResult);
    }
  } catch (e) {
    console.log(e.name + "\n" + e.message);
  }

  return bookList;
};

module.exports = createResult;
