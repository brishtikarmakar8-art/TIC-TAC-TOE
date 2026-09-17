const cells = document.querySelectorAll(".cell");
const turnText = document.querySelector(".turn");
const resultText = document.querySelector(".result");
const restartButton = document.querySelector(".restart");

let currentPlayer = "X";
let gameActive = true;

let board = ["", "", "", "", "", "", "", ""];

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
});

function handleCellClick(event) {

    const index = event.target.dataset.index;

    // Stop if cell is already filled
    if (board[index] !== "" || !gameActive) {
        return;
    }

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    event.target.classList.add(
        currentPlayer.toLowerCase()
    );

    checkWinner();
}

function checkWinner() {

    let winnerFound = false;

    for (let pattern of winningPatterns) {

        const [a, b, c] = pattern;

        if (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {

            winnerFound = true;

            cells[a].classList.add("winner");
            cells[b].classList.add("winner");
            cells[c].classList.add("winner");

            resultText.textContent =
                `🎉 Player ${currentPlayer} Wins!`;

            turnText.textContent = "Game Over";

            gameActive = false;

            return;
        }
    }

    // Check for draw
    if (!board.includes("")) {

        resultText.textContent = "🤝 It's a Draw!";
        turnText.textContent = "Game Over";

        gameActive = false;

        return;
    }

    // Change player
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    turnText.textContent =
        `Player ${currentPlayer}'s Turn`;
}

restartButton.addEventListener("click", restartGame);

function restartGame() {

    board = ["", "", "", "", "", "", "", ""];

    currentPlayer = "X";
    gameActive = true;

    cells.forEach((cell) => {
        cell.textContent = "";
        cell.classList.remove("x", "o", "winner");
    });

    turnText.textContent = "Player X's Turn";
    resultText.textContent = "";
}
