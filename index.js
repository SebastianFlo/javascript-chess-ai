var chess = new Chess();
var board = ChessBoard('board', cfg);

var cfg = {
  draggable: true,
  position: 'start',
  // onDragStart: onDragStart,
  // onDrop: onDrop,
  // onMouseoutSquare: onMouseoutSquare,
  // onMouseoverSquare: onMouseoverSquare,
  // onSnapEnd: onSnapEnd
};

var randomMove = setInterval(playRandomMove, 200);

function playRandomMove () {
  if (chess.game_over()) {
    clearInterval(randomMove);
    console.log('game over');
  } 

  var moves = chess.moves();
  var move = moves[Math.floor(Math.random() * moves.length)];
  board.position(chess.fen());
  chess.move(move);
  console.log(chess.ascii());
}
