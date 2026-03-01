import { defaultHeuristic } from '../utils/helpers.js';

export function aStar(grid, startNode, finishNode, heuristic = defaultHeuristic) {
  const visitedNodesInOrder = [];
  startNode.distance = 0; // g-cost
  const openSet = getAllNodes(grid);

  while (openSet.length) {
    sortNodesByF(openSet, finishNode, heuristic);
    const current = openSet.shift();

    if (current.isWall) continue;
    if (current.distance === Infinity) return visitedNodesInOrder;

    current.isVisited = true;
    visitedNodesInOrder.push(current);

    if (current === finishNode) return visitedNodesInOrder;

    const neighbors = getUnvisitedNeighbors(current, grid);
    for (const neighbor of neighbors) {
      const tentativeG = current.distance + 1;
      if (tentativeG < neighbor.distance) {
        neighbor.distance = tentativeG;
        neighbor.previousNode = current;
      }
    }
  }
  return visitedNodesInOrder;
}

function sortNodesByF(unvisitedNodes, finishNode, heuristic) {
  unvisitedNodes.sort((a, b) => (a.distance + heuristic(a, finishNode)) - (b.distance + heuristic(b, finishNode)));
}

function getUnvisitedNeighbors(node, grid) {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter(neighbor => !neighbor.isVisited);
}

function getAllNodes(grid) {
  const nodes = [];
  for (const row of grid) for (const node of row) nodes.push(node);
  return nodes;
}

export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
