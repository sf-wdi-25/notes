window.addEventListener("load", function () {	
	var turn = "X";
	var $newClick = $('.cell');
	$newClick.click(newMark);

function newMark() {
	console.log(this);
	if (turn === "X") {
		$(this).removeClass("cell");
		$(this).addClass("X");
		turn = "O";
		$(this).html("X");
		$("#headline").text("Your turn O");
	}
	else {
		$(this).removeClass("cell");
		$(this).addClass("O");
		turn = "X";
		$(this).html("O");
		$("#headline").text("Your turn X");
	}
	checkXWin();
	checkOWin();
}
var checkXWin = function () {
	var random1 = document.querySelector("#sq1");
	var random2 = document.querySelector("#sq2");
	var random3 = document.querySelector("#sq3");
	var random4 = document.querySelector("#sq4");
	var random5 = document.querySelector("#sq5");
	var random6 = document.querySelector("#sq6");
	var random7 = document.querySelector("#sq7");
	var random8 = document.querySelector("#sq8");
	var random9 = document.querySelector("#sq9");

	if (random1.textContent === "X" && random2.textContent === "X" && random3.textContent === "X") {
		alert("X is the winner!");
		clearBoard();
	}
	else if (random4.textContent === "X" && random5.textContent === "X" && random6.textContent === "X") {
		alert("X is the winner!");
		clearBoard();
	}
	else if (random7.textContent === "X" && random8.textContent === "X" && random9.textContent === "X") {
		alert("X is the winner!");
		clearBoard();
	}	
	else if (random1.textContent === "X" && random4.textContent === "X" && random7.textContent === "X") {
		alert("X is the winner!");
		clearBoard();
	}
	else if (random2.textContent === "X" && random5.textContent === "X" && random8.textContent === "X") {
		alert("X is the winner!");
		clearBoard();
	}
	else if (random3.textContent === "X" && random6.textContent === "X" && random9.textContent === "X") {
		alert("X is the winner!");
		clearBoard();
	}
	else if (random1.textContent === "X" && random5.textContent === "X" && random9.textContent === "X") {
		alert("X is the winner!");
		clearBoard();
	}
	else if (random3.textContent === "X" && random5.textContent === "X" && random7.textContent === "X") {
		alert("X is the winner!");
		clearBoard();
	}
}

var checkOWin = function() {
	var random1 = document.querySelector("#sq1");
	var random2 = document.querySelector("#sq2");
	var random3 = document.querySelector("#sq3");
	var random4 = document.querySelector("#sq4");
	var random5 = document.querySelector("#sq5");
	var random6 = document.querySelector("#sq6");
	var random7 = document.querySelector("#sq7");
	var random8 = document.querySelector("#sq8");
	var random9 = document.querySelector("#sq9");
	if (random1.textContent === "O" && random2.textContent === "O" && random3.textContent === "O") {
		alert("O is the winner!");
		clearBoard();
	}
	else if (random4.textContent === "O" && random5.textContent === "O" && random6.textContent === "O") {
		alert("O is the winner!");
		clearBoard();
	}
	else if (random7.textContent === "O" && random8.textContent === "O" && random9.textContent === "O") {
		alert("O is the winner!");
		clearBoard();
	}	
	else if (random1.textContent === "O" && random4.textContent === "O" && random7.textContent === "O") {
		alert("O is the winner!");
		clearBoard();
	}
	else if (random2.textContent === "O" && random5.textContent === "O" && random8.textContent === "O") {
		alert("O is the winner!");
		clearBoard();
	}
	else if (random3.textContent === "O" && random6.textContent === "O" && random9.textContent === "O") {
		alert("O is the winner!");
		clearBoard();
	}
	else if (random1.textContent === "O" && random5.textContent === "O" && random9.textContent === "O") {
		alert("O is the winner!");
		clearBoard();
	}
	else if (random3.textContent === "O" && random5.textContent === "O" && random7.textContent === "O") {
		alert("O is the winner!");
		clearBoard();
	}
}


$("Button").on("click", clearBoard);
function clearBoard() {
	var newBoard = document.querySelectorAll('#board');
	for (i=0; i < newBoard.length; i++) {
		newBoard[i].style.width = '31em';
		newBoard[i].style.height = '30em';
		newBoard[i].style.position = 'relative';
		newBoard[i].style.top = '30px';
		newBoard[i].style.left = '10%';
		newBoard[i].style.color = "aqua";
	var sq1 = document.querySelector("#sq1");
	sq1.innerHTML = "1";
	sq1.style.color = "aqua";
	var sq2 = document.querySelector("#sq2");
	sq2.innerHTML = "2";
	sq2.style.color = "aqua";	
	var sq3 = document.querySelector("#sq3");
	sq3.innerHTML = "3";
	sq3.style.color = "aqua";
	var sq4 = document.querySelector("#sq4");
	sq4.innerHTML = "4";
	sq4.style.color = "aqua";
	var sq5 = document.querySelector("#sq5");
	sq5.innerHTML = "5";
	sq5.style.color = "aqua";
	var sq6 = document.querySelector("#sq6");
	sq6.innerHTML = "6";
	sq6.style.color = "aqua";
	var sq7 = document.querySelector("#sq7");
	sq7.innerHTML = "7";
	sq7.style.color = "aqua";
	var sq8 = document.querySelector("#sq8");
	sq8.innerHTML = "8";
	sq8.style.color = "aqua";
	var sq9 = document.querySelector("#sq9");
	sq9.innerHTML = "9";
	sq9.style.color = "aqua";
		}	
	}

});