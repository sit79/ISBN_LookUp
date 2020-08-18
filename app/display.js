const display = (bookCollection) => {
  for (const item of bookCollection) {
    if (!item["Not Found"]) {
      try {
        let lookUp = "ISBN:" + item.ISBN;
        let book = item[lookUp];
        let title = book.title;
        let publisher = book.publishers[0]["name"];
        let author = book.authors !== undefined ? book.authors[0]["name"] : "";
        console.log(
          `Titel: ${title} | Autor: ${author} | Verlag: ${publisher}`
        );
      } catch (error) {
        console.log(error);
      }
    }
  }
};

module.exports = display;
