// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ visualizeDijkstra, visualizeBFS, visualizeDFS, visualizeAStar, visualizeBestFirst, clearGrid }) => {
  return (
    <nav className="w-full bg-slate-800 p-4 mb-8 flex justify-center gap-6 shadow-md">
      <div className="text-white font-bold text-xl mr-auto ml-10">
        Pathfinding Visualizer
      </div>
      
      <div className="flex gap-4 mr-10">
        <button 
          onClick={visualizeDijkstra}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md font-semibold transition-all active:scale-95"
        >
          Dijkstra
        </button>

        <button 
          onClick={visualizeBFS}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md font-semibold transition-all active:scale-95"
        >
          BFS
        </button>

        <button 
          onClick={visualizeDFS}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold transition-all active:scale-95"
        >
          DFS
        </button>

        <button 
          onClick={visualizeAStar}
          className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-md font-semibold transition-all active:scale-95"
        >
          A*
        </button>

        <button 
          onClick={visualizeBestFirst}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md font-semibold transition-all active:scale-95"
        >
          Best-first
        </button>

        <button 
          onClick={clearGrid}
          className="border border-slate-400 text-slate-200 hover:bg-slate-700 px-6 py-2 rounded-md transition-all"
        >
          Clear Grid
        </button>
      </div>
    </nav>
  );
};

export default Navbar;