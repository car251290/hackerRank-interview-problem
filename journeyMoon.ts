function journeyToMoon(n: number, astronaut: number[][]): number {
    class Graph {
        private adjList: number[][];
        private visited: boolean[];
        private n: number;
        constructor(n: number) {
            this.n = n;
            this.adjList = Array.from({ length: n }, () => []);
            this.visited = Array.from({ length: n }, () => false);
        }
        addEdge(a: number, b: number) {
            this.adjList[a].push(b);
            this.adjList[b].push(a);
        }
        getConnectedComponents() {
            const components: number[][] = [];
            for (let i = 0; i < this.n; i++) {
                if (!this.visited[i]) {
                    const component: number[] = [];
                    this.dfs(i, component);
                    components.push(component);
                }
            }
            return components;
        }
        private dfs(node: number, component: number[]) {
            this.visited[node] = true;
            component.push(node);
            this.adjList[node].forEach((neighbour) => {
                if (!this.visited[neighbour]) {
                    this.dfs(neighbour, component);
                }
            });
        }
    }


    const g = new Graph(n);
    astronaut.forEach(([a, b]) => {
        g.addEdge(a, b);
    });
    const components = g.getConnectedComponents();
    const total = n * (n - 1) / 2;
    let sum = 0;
    let result = 0;
    components.forEach((component) => {
        const len = component.length;
        result += sum * len;
        sum += len;
    });
    return total - result;
}