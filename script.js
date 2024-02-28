let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const result = document.getElementById('result');

function checkWinner() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            result.textContent = `Player ${currentPlayer} wins!`;
            document.querySelectorAll('.cell')[a].classList.add('winner');
            document.querySelectorAll('.cell')[b].classList.add('winner');
            document.querySelectorAll('.cell')[c].classList.add('winner');
        }
    }
    if (!gameBoard.includes('') && gameActive) {
        gameActive = false;
        result.textContent = "It's a tie!";
    }
}

function handleClick(cellIndex) {
    if (gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        document.querySelectorAll('.cell')[cellIndex].textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function restartGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    result.textContent = '';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winner');
    });
}
