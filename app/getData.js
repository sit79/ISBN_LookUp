const axios = require("axios");

const getData = async (isbn) => {
  // OpenLibrary finds many more items in non-English languages than the GoogleBook-API
  const url = `http://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`;
  let data;
  try {
    const response = await axios.get(url);
    data = response.data;
  } catch (e) {
    console.log(e.name + "\n" + e.message);
  }
  return data;
};

module.exports = getData;
