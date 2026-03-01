#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
  vector<vector<int>> grid;
  int r, c;
  vector<pair<int,int>> dirs{{-1,0},{1,0},{0,-1},{0,1}};
  using pii = pair<int,int>;

  Solution(const vector<vector<int>>& mat) : grid(mat) {
    r = grid.size();
    c = r ? grid[0].size() : 0;
  }

  int manhattan(const pii &a, const pii &b) {
    return abs(a.first - b.first) + abs(a.second - b.second);
  }

  int shortestPath(pii src, pii dst) {
    if (!inBounds(src) || !inBounds(dst) || grid[src.first][src.second]==1 || grid[dst.first][dst.second]==1)
      return -1;

    const int INF = INT_MAX / 4;
    vector<vector<int>> g(r, vector<int>(c, INF));

    // min-heap ordered by f = g + h, tie-breaker by smaller g
    using Item = tuple<int,int,int,int>; // f, g, row, col
    auto cmp = [](const Item &a, const Item &b){
      if (get<0>(a) != get<0>(b)) return get<0>(a) > get<0>(b);
      return get<1>(a) > get<1>(b);
    };
    priority_queue<Item, vector<Item>, decltype(cmp)> pq(cmp);

    g[src.first][src.second] = 1; // count nodes starting at 1 like BFS
    int f0 = 1 + manhattan(src, dst);
    pq.emplace(f0, 1, src.first, src.second);

    while(!pq.empty()){
      auto t = pq.top(); pq.pop();
      int fcur = get<0>(t);
      int gcur = get<1>(t);
      int r0 = get<2>(t);
      int c0 = get<3>(t);
      pii p = make_pair(r0, c0);
      if (gcur != g[r0][c0]) continue; // stale
      if (p == dst) return gcur;

      for (auto &dir : dirs) {
        int nr = r0 + dir.first;
        int nc = c0 + dir.second;
        pii np = make_pair(nr, nc);
        if (!inBounds(np) || grid[nr][nc]==1) continue;
        int tentativeG = gcur + 1;
        if (tentativeG < g[nr][nc]){
          g[nr][nc] = tentativeG;
          int f = tentativeG + manhattan(np, dst);
          pq.emplace(f, tentativeG, nr, nc);
        }
      }
    }
    return -1;
  }

private:
  bool inBounds(const pii &p){ return p.first>=0 && p.first<r && p.second>=0 && p.second<c; }
};

int main(){
  vector<vector<int>> grid = {
    {0,0,1,0,0},
    {0,0,0,1,0},
    {1,0,0,0,0},
    {0,1,0,0,1},
    {0,0,0,0,0}
  };
  Solution sol(grid);
  pair<int,int> src{0,0};
  pair<int,int> dst{4,4};
  int dist = sol.shortestPath(src,dst);
  if(dist!=-1)
    cout<<"A* shortest path length = "<<dist<<"\n";
  else
    cout<<"A* no path exists\n";
  return 0;
}
