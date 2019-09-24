const getTotalLiveAdjacents = (matrix, cellX, cellY) => {
  const sumAdjacents = 0;
  for(let i = -1 ; i < 1 ; i++){
    for(let j = -1 ; j < 1 ; j++){
      const row = cellX + i;
      const column = cellY + j;
      if(row >= 0 &&  column >= 0 && cellX !== row && cellY !== column){
        sumAdjacents += matrix[row][column];
      }
    }
  }
  return sumAdjacents;
};

const evalCell = (matrix, i, j) => {
  const totalLiveAdjacents = getTotalLiveAdjacents(matrix, i, j);
  const isLive = Boolean(matrix[i][j]);
  if(isLive){
    const hasUnderpopulation = totalLiveAdjacents < 2;
    const hasOverpopulation = totalLiveAdjacents > 3;
    if (hasUnderpopulation || hasOverpopulation) {
      return false;
    }
    return true;
  }
  return totalLiveAdjacents === 3;
};

const getNextGen = matrix => {
  const nextMatrix = matrix.splice(0);
  for (let i = 0; i < matrix.length; i++) {
    const matrixLength = matrix[i].length;
    for (let j = 0; j < matrixLength; j++) {
      nextMatrix[i, j] = evalCell(matrix, i, j);
    }
  }
  return nextMatrix;
};

module.exports = {
  getNextGen
};