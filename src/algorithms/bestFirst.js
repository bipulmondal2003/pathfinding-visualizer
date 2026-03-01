import { defaultHeuristic } from '../utils/helpers.js';

export function bestFirst(grid, startNode, finishNode, heuristic = defaultHeuristic) {
  const visitedNodesInOrder = [];
  const openSet = [];

  // start from the initial node and expand outward using only the
  // heuristic value to prioritise which node to visit next.
  openSet.push(startNode);

  while (openSet.length) {
    // always pick the node with the lowest h‑score
    sortNodesByH(openSet, finishNode, heuristic);
    const current = openSet.shift();

    if (current.isWall) continue;
    if (current.isVisited) continue;

    current.isVisited = true;
    visitedNodesInOrder.push(current);

    if (current === finishNode) return visitedNodesInOrder;

    const neighbors = getUnvisitedNeighbors(current, grid);
    for (const neighbor of neighbors) {
      // record the path only once, mimicking A*/BFS behaviour
      if (!neighbor.previousNode) neighbor.previousNode = current;
      openSet.push(neighbor);
    }
  }
  return visitedNodesInOrder;
}

function sortNodesByH(unvisitedNodes, finishNode, heuristic) {
  unvisitedNodes.sort((a, b) => heuristic(a, finishNode) - heuristic(b, finishNode));
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

export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
