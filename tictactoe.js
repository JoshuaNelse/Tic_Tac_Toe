
//Global variables 
var characterToPrint = 'x';
var gameOver = false;
const O_imgSrc = "<img src=\"https://iconsplace.com/wp-content/uploads/_icons/6d6d6d/256/png/letter-o-icon-256.png\">";
const X_imgSrc = "<img src=\"https://iconsplace.com/wp-content/uploads/_icons/6d6d6d/256/png/letter-x-icon-256.png\">";
const WINNING_COMBINATIONS =  [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
const CELL_COUNT = 9;


function printMove(cellNumber){
	if (document.getElementById(cellNumber).innerHTML == " " && !gameOver){
		document.getElementById(cellNumber).innerHTML = getImageToPrint();
		checkForVictory(getCharacterToPrint());
		updateCharacterToPrint();
	}
}


function updateCharacterToPrint(){
	characterToPrint = (characterToPrint == 'x') ? 'o' : 'x';
	return;
}


function getImageToPrint(){
	return (characterToPrint == 'x') ? X_imgSrc : O_imgSrc;
}


function getCharacterToPrint(){
	return characterToPrint;
}


function checkForVictory(playersTurn) {
	if (playersTurn == 'o' && is_O_victory()){
		alert("O Wins!!!");
		gameOver = true;

	} else if (playersTurn == 'x' && is_X_victory()){
		alert("X Wins!!!");
		gameOver = true;

	}
}


function isWinningCombination(playerSpaces){
	for (combination in WINNING_COMBINATIONS){
		let winningCombinationCounter = 0;
		for(cell in WINNING_COMBINATIONS[combination]){
			cellCombination = WINNING_COMBINATIONS[combination];
			for(s in playerSpaces){
				if(playerSpaces[s] == cellCombination[cell]){
					winningCombinationCounter++;
				}
				if(winningCombinationCounter == 3){
					return true;
				}
			}
		}
	}
	return false;
}


function is_O_victory(){
	let playerSpaces = [];
	for(let i = 1; i <= CELL_COUNT; i++){
		cell = document.getElementById(i);
		if (cell.innerHTML == O_imgSrc){
			playerSpaces.push(i);
		}
	}
	return isWinningCombination(playerSpaces);
}


function is_X_victory(){
	let playerSpaces = [];
	for(let i = 1; i <= CELL_COUNT; i++){
		cell = document.getElementById(i);
		if (cell.innerHTML == X_imgSrc){
			playerSpaces.push(i);
		}
	}
	return isWinningCombination(playerSpaces);
}