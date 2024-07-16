$(document).ready(function () {
    const X_class = 'x';
    const O_class = 'o';
    const COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let oTurn;
    const cellElements = $('.cell');
    startGame();

    $('#restartButton').on('click', startGame);

    function startGame() {
        oTurn = false;
        cellElements.removeClass(X_class);
        cellElements.removeClass(O_class);
        cellElements.off('click');
        cellElements.on('click', handleClick, { once: true });
    }

    function handleClick(e) {
        const cell = $(this);
        const currentClass = oTurn ? O_class : X_class;
        placeMark(cell, currentClass);
        if (checkWin(currentClass)) {
            endGame(false);
        } else if (isDraw()) {
            endGame(true);
        } else {
            swapTurns();
        }
    }

    function placeMark(cell, currentClass) {
        cell.addClass(currentClass);
    }

    function swapTurns() {
        oTurn = !oTurn;
    }

    function checkWin(currentClass) {
        return COMBINATIONS.some(combination => {
            return combination.every(index => {
                return $($('.cell')[index]).hasClass(currentClass);
            });
        });
    }

    function isDraw() {
        return [...cellElements].every(cell => {
            return $(cell).hasClass(X_class) || $(cell).hasClass(O_class);
        });
    }

    function endGame(draw) {
        if (draw) {
            alert('Draw!');
        } else {
            alert(`${oTurn ? "O's" : "X's"} Wins!`);
        }
        startGame();
    }
});
