document.addEventListener('DOMContentLoaded', (event) => {
    generateSudoku();
});

function generateSudoku() {
    const sudokuContainer = document.getElementById('sudoku-container');
    sudokuContainer.innerHTML = '';
    const level = document.getElementById('level').value;

    let grid;
    if (level === 'easy') {
        grid = [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ];
    } else if (level === 'medium') {
        grid = [
            [0, 3, 0, 0, 7, 0, 0, 0, 1],
            [6, 0, 0, 1, 0, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 0, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 0, 0, 0, 5],
            [2, 0, 0, 0, 0, 0, 0, 7, 9]
        ];
    } else if (level === 'hard') {
        grid = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 0, 0, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ];
    }

    grid.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell', 'grid-line');
            const input = document.createElement('input');
            input.type = 'text';
            if (cell !== 0) {
                input.value = cell;
                input.disabled = true;
            }
            cellDiv.appendChild(input);
            sudokuContainer.appendChild(cellDiv);
        });
    });
}

function checkSudoku() {
    const inputs = document.querySelectorAll('#sudoku-container .cell input');
    let isValid = true;

    // Check the validity of the Sudoku grid
    inputs.forEach(input => {
        if (input.value === '' || input.disabled) {
            isValid = false;
        }
    });

    if (isValid) {
        alert('Sudoku is complete!');
    } else {
        alert('There are still empty cells.');
    }
}
