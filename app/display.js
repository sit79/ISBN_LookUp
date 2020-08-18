const display = (bookCollection) => {
  console.log("***************** START *****************");
  for (const item of bookCollection) {
    console.log(item);
  }
  console.log("***************** END *****************");
};

module.exports = display;
