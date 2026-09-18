# Tic Tac Toe

A simple, responsive Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript.

## Features

- Two-player gameplay (X vs O)
- Win detection with highlighted winning cells
- Draw detection
- Restart game functionality
- Responsive design (works on mobile and desktop)
- Clean, modern UI with gradient background

## How to Play

1. Open `index.html` in a web browser
2. Players take turns clicking on empty cells
3. First player to get 3 in a row (horizontally, vertically, or diagonally) wins
4. If all cells are filled with no winner, it's a draw
5. Click "Restart Game" to play again

## Project Structure

```
├── index.html    # Main HTML structure
├── style.css     # Styling and responsive design
└── script.js     # Game logic
```

## Running Locally

Simply open `index.html` in any modern web browser. No build steps or dependencies required.

## Game Logic

- `script.js` handles all game state:
  - Tracks current player (X or O)
  - Manages board state
  - Checks for winners using 8 winning patterns
  - Handles draw conditions
  - Resets game on restart
