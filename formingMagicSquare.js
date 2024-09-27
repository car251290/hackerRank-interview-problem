function formingMagicSquare(s) {
    let allMagicSquares = [];
    let magicSquare = [
        [
            [8, 1, 6],
            [3, 5, 7],
            [4, 9, 2]
        ],
        [
            [6, 1, 8],
            [7, 5, 3],
            [2, 9, 4]
        ],
        [
            [4, 9, 2],
            [3, 5, 7],
            [8, 1, 6]
        ],
        [
            [2, 9, 4],
            [7, 5, 3],
            [6, 1, 8]
        ],
        [
            [8, 3, 4],
            [1, 5, 9],
            [6, 7, 2]
        ],
        [
            [4, 3, 8],
            [9, 5, 1],
            [2, 7, 6]
        ],
        [
            [6, 7, 2],
            [1, 5, 9],
            [8, 3, 4]
        ],
        [
            [2, 7, 6],
            [9, 5, 1],
            [4, 3, 8]
        ]
    ];
    for (let i = 0; i < magicSquare.length; i++) {
        let cost = 0;
        for (let j = 0; j < magicSquare[i].length; j++) {
            for (let k = 0; k < magicSquare[i][j].length; k++) {
                cost += Math.abs(s[j][k] - magicSquare[i][j][k]);
            }
        }
        allMagicSquares.push(cost);
    }
    return Math.min(...allMagicSquares);

}