require("dotenv").config();
const Excel = require("exceljs");
const axios = require("axios");

const workbook = new Excel.Workbook();
const apiKey = process.env.API_KEY;
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
  // const url = `http://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`;
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${apiKey}`;
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
      bookCollection.push(result);
    }
  } catch (error) {
    console.log(error);
  }
};

const runWorkflow = async () => {
  await readMyFile();
  await findMyBooks();
  for (const item of bookCollection) {
    if (item["totalItems"] === 0) {
      console.log("Book not found.");
    } else {
      console.log(item["items"][0]["volumeInfo"]["authors"][0]);
    }
  }
};

runWorkflow();
