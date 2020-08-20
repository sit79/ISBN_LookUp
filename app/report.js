const report = (readableResult) => {
  const searched = readableResult.length;
  const found = readableResult.filter((book) => book.found === true).length;
  const notFound = searched - found;
  console.log(
    `${notFound} of ${readableResult.length} books could not be found.`
  );
};

module.exports = report;
