const getRandomBoolean = () => Math.random() >= 0.5;

const getRandomRow = length => Array.from({ length }, getRandomBoolean);

const getRandomGrid = (numRows, numColumns) =>
  Array.from({ length: numRows }, () => getRandomRow(numColumns));

module.exports = {
  getRandomGrid
};