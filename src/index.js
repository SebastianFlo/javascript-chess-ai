var chess = new Chess();
var board = ChessBoard('board');

while (!chess.game_over()) {
  var moves = chess.moves();
  var move = moves[Math.floor(Math.random() * moves.length)];
  chess.move(move);
}

console.log(chess.pgn());
console.log(chess.ascii());