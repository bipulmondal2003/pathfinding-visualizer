# 🚀 Pathfinding Visualizer

A high-performance web application built with **React** and **Tailwind CSS** that visualizes classic graph search algorithms. This project demonstrates advanced knowledge of **Data Structures and Algorithms (DSA)**, **Direct DOM Manipulation** for smooth animations, and **Modern Web Development** practices.

## ✨ Features
- **Dijkstra's Algorithm**: Guarantees the shortest path in a weighted graph.
- **Breadth-First Search (BFS)**: Explores nodes level by level and finds the shortest path on an unweighted grid.
- **Depth-First Search (DFS)**: Goes as deep as possible along each branch; the visualization now includes an option to compute the *shortest* path by brute force, which requires searching every reachable node and is therefore highly inefficient compared to BFS or Dijkstra.  This contrasts the naive DFS with a tuned version that still uses depth‑first exploration but guarantees optimal results.
 - **A***: A best-first search that uses a heuristic (typically Manhattan distance) combined with path cost to find optimal shortest paths efficiently on grids.
 - **Best-First Search**: A greedy heuristic-driven search that prioritizes nodes closer to the goal — very fast in many mazes but does not guarantee the shortest path.
- **Interactive Maze Building**: Click and drag to draw walls and create complex obstacles.
- **Real-time Visualization**: Watch the algorithm explore the grid with custom-designed Tailwind CSS animations.
- **Responsive & High Performance**: Optimized rendering to maintain 60FPS during large-scale grid traversals.

## 🛠️ Tech Stack
- **Frontend**: React.js (Hooks, Context API)
- **Styling**: Tailwind CSS v4 (Custom Keyframes & Animations)
- **Build Tool**: Vite
- **Algorithm Logic**: Pure JavaScript (Graph Theory)

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

### Algorithm Options

Use the buttons in the navbar to select which search you want to visualize.  After walls have been drawn:
1. Click **Dijkstra** for the standard weighted algorithm.
2. Click **BFS** to see breadth-first exploration; the shortest path will still be found.
3. Click **A*** to run the A-star algorithm (uses a heuristic + path cost). It usually finds the shortest path faster than Dijkstra on grids when an admissible heuristic like Manhattan distance is used.
4. Click **Best-First** to run the greedy best-first search. It prioritizes nodes by estimated distance to the goal — fast, but may not return an optimal path.
5. Click **DFS** to watch depth-first traversal.  Under the hood the app performs a brute-force search to guarantee the shortest path, which means it touches every reachable cell before settling on the route – the animation will therefore be much slower compared to the other algorithms.

## Algorithm Details
### A* (A-star)
- Description: A* is a best-first search that combines the cost to reach a node (g) and a heuristic estimate to the goal (h) into f = g + h. On grid-based maps with an admissible heuristic (e.g., Manhattan distance), A* is guaranteed to find an optimal shortest path.
- Complexity: Time depends on the heuristic; worst-case similar to Dijkstra (exponential in worst inputs), but typically much faster in practice on grids.
- Source: See [src/algorithms/aStar.js](src/algorithms/aStar.js) for the implementation used by this visualizer.

### Best-First Search
- Description: Best-First Search is a greedy algorithm that selects the next node to explore based solely on a heuristic estimate to the goal (h). It explores promising paths quickly but does not take the path cost so it can return non-optimal paths.
- Complexity: Generally faster than uninformed searches but not guaranteed to be optimal; performance depends heavily on the heuristic.
- Source: See [src/algorithms/bestFirst.js](src/algorithms/bestFirst.js) for the implementation used by this visualizer.

4. Use **Clear Grid** to reset the board at any time.

### How to run this project
1. npm run dev

### Installation
1. Clone the repository:
   ```bash
   git clone 