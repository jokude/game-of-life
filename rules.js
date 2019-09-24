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

const evalRule3 = (matrix, i, j) => {
  return true;
};

const evalRule2 = (matrix, i, j) => {
  return true;
};

const evalRule1 = (matrix, i, j) => {
  return true;
};

const evalCell = (matrix, i, j) => {
  if (evalRule1()) {
    return;
  }
  if (evalRule2()) {
    return;
  }
  if (evalRule3()) {
    return;
  }
};

const nextGen = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    var matrixLength = matrix[i].length;
    for (let j = 0; j < matrixLength; j++) {
      evalCell(matrix, i, j);
    }
  }

  return matrix;
};