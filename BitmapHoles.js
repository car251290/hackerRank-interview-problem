function BitmapHoles(strArr) {
    const bitmap = strArr.map(row => row.split(''));
    const visited = new Set();
    const rows = bitmap.length;
    const cols = bitmap[0].length;
    let holes = 0;
    
    function dfs(row, col) {
        if (row < 0 || row >= rows || col < 0 || col >= cols) return;
        if (bitmap[row][col] === '0' || visited.has(`${row},${col}`)) return;
    
        visited.add(`${row},${col}`);
        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    }
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
        if (bitmap[row][col] === '1' && !visited.has(`${row},${col}`)) {
            holes++;
            dfs(row, col);
        }
        }
    }
    
    return holes;
}
