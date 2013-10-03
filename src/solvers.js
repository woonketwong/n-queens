/*           _                    
   ___  ___ | |_   _____ _ __ ___ 
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n){
  var solution = undefined; //fixme
  var board = new Board({n:n});

  var matrix = board.attributes;
  var currentRow = 0;
  var result = false;
  var depthFirstSearch = function(currentRow){
    if(currentRow > matrix.n - 1){
      return;
    }
    for(var i = 0; i < matrix.n; i++){
      board.togglePiece(currentRow, i);
      if(!board.hasAnyColConflicts()){
        depthFirstSearch(currentRow+1);
        return;
      } else{
        board.togglePiece(currentRow, i);
      }
    }
    return;
  };
  depthFirstSearch(0);
  if (!board.hasAnyRooksConflicts()){
    solution = matrix;
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
  var solutionCount = 0; //fixme
  var board = new Board({n:n});

  var matrix = board.attributes;
  var currentRow = 0;
  var result = false;
  var depthFirstSearch = function(currentRow){
    if(currentRow > matrix.n - 1){
      solutionCount++;
      return;
    }
    for(var i = 0; i < matrix.n; i++){
      board.togglePiece(currentRow, i);
      if(!board.hasAnyColConflicts()){
        depthFirstSearch(currentRow+1);
      }
      board.togglePiece(currentRow, i);
    }
    return;
  };
  depthFirstSearch(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = undefined; //fixme
  var board = new Board({n:n});

  var matrix = board.attributes;
  var currentRow = 0;
  var result = false;
  var depthFirstSearch = function(currentRow){
    if(currentRow > matrix.n - 1){
      return;
    }
    for(var i = 0; i < matrix.n; i++){
      board.togglePiece(currentRow, i);
      if(!board.hasAnyQueensConflicts()){
        depthFirstSearch(currentRow+1);
        return;
      } else{
        board.togglePiece(currentRow, i);
      }
    }
    return;
  };
  depthFirstSearch(0);
  if (!board.hasAnyQueensConflicts()){
    solution = matrix;
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = 0; //fixme
  var board = new Board({n:n});

  var matrix = board.attributes;
  var currentRow = 0;
  var result = false;
  var depthFirstSearch = function(currentRow){
    if(currentRow > matrix.n - 1){
      solutionCount++;
      return;
    }
    for(var i = 0; i < matrix.n; i++){
      board.togglePiece(currentRow, i);
      if(!board.hasAnyQueensConflicts()){
        depthFirstSearch(currentRow+1);
      }
      board.togglePiece(currentRow, i);
    }
    return;
  };
  // debugger;
  depthFirstSearch(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
