def crosswordPuzzle(crossword, words):
    """
    This function takes a crossword puzzle and a list of words, and fills the crossword with the words.
    :param crossword: A 2D list representing the crossword puzzle
    :param words: A list of words to fill in the crossword
    :return: A filled crossword puzzle or None if no solution is found
    """
    def canPlaceWord(crossword, word, row, col, direction):
        # Check if the word can be placed in the crossword at the given position
        for i in range(len(word)):
            if direction == 'H':
                if col + i >= len(crossword[0]) or (crossword[row][col + i] != '-' and crossword[row][col + i] != word[i]):
                    return False
            else:
                if row + i >= len(crossword) or (crossword[row + i][col] != '-' and crossword[row + i][col] != word[i]):
                    return False
        return True
    def placeWord(crossword, word, row, col, direction):
        # Place the word in the crossword at the given position
        for i in range(len(word)):
            if direction == 'H':
                crossword[row][col + i] = word[i]
            else:
                crossword[row + i][col] = word[i]
    def removeWord(crossword, word, row, col, direction):
        # Remove the word from the crossword at the given position
        for i in range(len(word)):
            if direction == 'H':
                crossword[row][col + i] = '-'
            else:
                crossword[row + i][col] = '-'      
    def findEmptyCell(crossword):
        # Find the first empty cell in the crossword
        for i in range(len(crossword)):
            for j in range(len(crossword[0])):
                if crossword[i][j] == '-':
                    return (i, j)
        return None
    def solve(crossword, words):
        # Find the first empty cell in the crossword
        emptyCell = findEmptyCell(crossword)
        if not emptyCell:
            return True
        row, col = emptyCell
        # Try to place each word in the crossword
        for word in words:
            # Try to place the word horizontally
            if canPlaceWord(crossword, word, row, col, 'H'):
                placeWord(crossword, word, row, col, 'H')
                if solve(crossword, words):
                    return True
                removeWord(crossword, word, row, col, 'H')
            # Try to place the word vertically
            if canPlaceWord(crossword, word, row, col, 'V'):
                placeWord(crossword, word, row, col, 'V')
                if solve(crossword, words):
                    return True
                removeWord(crossword, word, row, col, 'V')

  

