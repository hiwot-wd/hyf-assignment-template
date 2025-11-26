/** @format */

function getRenderedGame(board) {
  return board.map((row) => row.join(" | ")).join("\n---------\n");
}

// Analyze the board and return game info
function getGameInfo(board) {
  const lines = [
    ...board, // rows
    board.map((_, i) => board.map((row) => row[i])), // columns
    [board[0][0], board[1][1], board[2][2]], // diagonal 1
    [board[0][2], board[1][1], board[2][0]], // diagonal 2
  ];

  // Find winner if any line has the same non-empty symbol
  let winner = null;
  for (let line of lines) {
    if (line[0] !== " " && line.every((cell) => cell === line[0])) {
      winner = line[0];
    }
  }

  // Loser is the opposite symbol
  let loser = winner ? (winner === "x" ? "o" : "x") : null;

  // Game ends if there is a winner or no empty spaces left
  let hasEnded = !!winner || board.flat().every((cell) => cell !== " ");

  // count moves to determine next player
  let nextPlayer = null;
  if (!hasEnded) {
    const flat = board.flat();
    const xCount = flat.filter((c) => c === "x").length;
    const oCount = flat.filter((c) => c === "o").length;
    nextPlayer = xCount <= oCount ? "x" : "o";
  }

  return { winner, loser, hasEnded, nextPlayer };
}

// Example usage
const position = [
  ["x", "o", " "],
  [" ", "o", " "],
  [" ", "o", "x"],
];

console.log(getRenderedGame(position));
console.log(getGameInfo(position));
