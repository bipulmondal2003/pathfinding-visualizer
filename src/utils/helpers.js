export const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === 10 && col === 5,
    isFinish: row === 10 && col === 35,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

export const manhattanDistance = (nodeA, nodeB) => {
  return Math.abs(nodeA.row - nodeB.row) + Math.abs(nodeA.col - nodeB.col);
};

export const euclideanDistance = (nodeA, nodeB) => {
  const dx = nodeA.row - nodeB.row;
  const dy = nodeA.col - nodeB.col;
  return Math.sqrt(dx * dx + dy * dy);
};

export const defaultHeuristic = manhattanDistance;
export const getInitialGrid = (rows = 20, cols = 50) => {
  const grid = [];
  for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < cols; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};