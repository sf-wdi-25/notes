/*
 * Tic-tac-toe game - waits for page to load then sets up game
 */

$( document ).ready(function() {
    /*
     * Initial variable declaration and setting.
     * XsMove, turnCount and board will be set with resetBoard, so just declare
     * winningCombinations, playermove and notification don't change, so declare and set
     */
    var XsMove, winner, turnCount;
    var board = [];
    var winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

    /*
     * Checks current board against winning conditions array, and returns winner if found
     * Otherwise returns false
     */
    var checkWinner = function() {
        var isWinner = function(symbol) {
            var hasWon = false;
            for (var i = 0; i < winningCombinations.length; i++) {
                if (board[winningCombinations[i][0]] === symbol &&
                    board[winningCombinations[i][1]] === symbol &&
                    board[winningCombinations[i][2]] === symbol)
                    hasWon = true;
            }
            return hasWon;
        };
        if (isWinner("X")) winner = "X";
        if (isWinner("O")) winner = "O";
        if (winner) {
            $('#board').off("click");
            updateContent(winner + " Wins!", "lime", "&nbsp;", winner + " Wins!");
        } else if (turnCount == 9) {
            $('#board').off("click");
            updateContent("Its a Tie!!", "lime", "&nbsp;", "Its a Tie!!");
        }
    };

    /*
     * Clears the board tracker, resets XsMove, turnCount, board to inital conditions, calls
     * updateContent to reset playermove and notification divs to initial conditions and adds a
     * click event listener on #board to call makeMove
     */
    var resetBoard = function() {
        XsMove = true;
        turnCount = 0;
        board = [null, null, null, null, null, null, null, null, null];
        moves = [];
        winner = null;
        $('.box').html("&nbsp;");
        updateContent("&nbsp;", "", "X's move");

        $("#undo").click(undoMove); //EL for undo btn
        $("#redo").click(redoMove); //EL for redo btn
        $("#board").off("click");
        $("#board").click(makeMove);
        $('#undo').prop('disabled', true);
        $('#redo').prop('disabled', true);
    };

    /*
     * Updates notification div with notification_text and notification_color, updates playermove div
     * with playermove_text, and if passed, alerts user with alert_text
     */
    var updateContent = function(notification_text, notification_color, playermove_text, alert_text) {
        $('#notification').html(notification_text);
        $('#notification').css("background-color", notification_color);
        $('#playermove').html(playermove_text);
        if (alert_text) alert(alert_text);
    };

    /*
     * When user clicks a square, this function checks whether the square has already been clicked,
     * if the square has been clicked, it calls updateContent with appropriate messages.
     *
     * If not it calls updateContent with appropriate messages, sets the square to the current player,
     * updates the board tracker, swaps current player, increments turnCount and checks for a
     * winner.
     *
     * If there is a winner, it calls updateContent with appropriate messages, and removes
     * the click event listener (to stop users from entering moves).
     *
     * If turnCount equals 9, then it calls updateContent with appropriate messages, and removes
     * click event listener.
     */
    var makeMove = function(event) {
        if (event.target.innerHTML === "X" || event.target.innerHTML === "O") {
            updateContent("Already selected", "red", "Still " + (XsMove ? "X" : "O") + "'s move", "Already selected. Still " + (XsMove ? "X" : "O") + "'s move");
        } else {
            event.target.innerHTML = XsMove ? "X" : "O";
            board[event.target.id] = XsMove ? "X" : "O";
            moves.push([event.target.id,XsMove ? "X" : "O"]);
            XsMove = !XsMove;
            updateContent("&nbsp;", "", (XsMove ? "X" : "O") + "'s move");
            turnCount++;
            if (turnCount > 0) $('#undo').prop('disabled', false);
            checkWinner();
        }
    };

    var undoMove = function() {
        if (turnCount > 0) {
            turnCount--;
            board[moves[turnCount][0]] = null;
            $('#'+moves[turnCount][0]).html('&nbsp;');
            XsMove = !XsMove;
            updateContent("&nbsp;", "", (XsMove ? "X" : "O") + "'s move");
            if (turnCount === 0) $('#undo').prop('disabled', true);
            if (turnCount < moves.length) $('#redo').prop('disabled', false);
            if (winner) {
                $("#board").click(makeMove);
                winner = null;
            }
        }
    };

    var redoMove = function() {
        if (turnCount < moves.length) {
            board[moves[turnCount][0]] = moves[turnCount][1];
            $('#'+moves[turnCount][0]).html(moves[turnCount][1]);
            XsMove = !XsMove;
            turnCount++;
            if (turnCount < moves.length) $('#redo').prop('disabled', false);
            if (turnCount === moves.length) $('#redo').prop('disabled', true);
            updateContent("&nbsp;", "", (XsMove ? "X" : "O") + "'s move");
            checkWinner();
        }
    };
    /*
     * Upon page load, resets board and sets up reset button click event listener
     */
    resetBoard();
    $('#reset').click(resetBoard);
});
