const Excel = require("exceljs");
const axios = require("axios");
// const fs = require("fs");
// const https = require("https");

const workbook = new Excel.Workbook();
let isbnCollection = [],
  bookCollection = [],
  isbn;

const readMyFile = async () => {
  try {
    await workbook.xlsx.readFile("./isbn.xlsx");
    const worksheet = workbook.getWorksheet("Books");
    for (let i = 3; i < 6; i++) {
      const row = worksheet.getRow(i);
      isbn = row.getCell("B").value;
      isbnCollection.push(isbn);
    }
  } catch (error) {
    console.log(error);
  }
};

const getData = async (isbn) => {
  const url = `http://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`;
  let data;
  try {
    const response = await axios.get(url);
    data = response.data;
  } catch (error) {
    console.log(error);
  }
  return data;
};

const findMyBooks = async () => {
  try {
    for (const isbn of isbnCollection) {
      const result = await getData(isbn);
      console.log(result);
      bookCollection.push(result);
    }
  } catch (error) {
    console.log(error);
  }
};

async function runWorkflow() {
  await readMyFile();
  await findMyBooks();
}

runWorkflow();
