const display = (bookCollection) => {
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
      title = book.title;
      publisher = book.publishers[0]["name"];
      author = book.authors !== undefined ? book.authors[0]["name"] : "";
      date = book.publish_date;
    }
    console.log(
      `ISBN: ${isbn} | ${found} | Titel: ${title} | Autor: ${author} | Verlag: ${publisher} | Veröffentlicht: ${date}`
    );
  }
};

module.exports = display;
