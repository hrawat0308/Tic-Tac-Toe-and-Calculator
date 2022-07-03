'use strict';

const tiles = document.querySelectorAll('.tile');
const HideWon = document.querySelector(".close-won");
const playAgain = document.getElementById('playAgain');
const winningPlayer = document.getElementById("winning-player");
const appChangerButton = document.getElementById("app-changer-button");
const TicTacApp = document.getElementById("board");
const calculatorApp = document.getElementById("calculator-app");
const pageHeading = document.querySelector(".heading-name");
const calculatorButtons = document.querySelectorAll(".calculator-button");
const calculatorInput = document.querySelector(".calculator-input");

let player1 = "O";
let player2 = "X";
let curPlayer = player1;
let gameOver = false;
let calculatorIsOpen = false;
let board = [['', '', ''], ['', '', ''], ['', '', '']];

appChangerButton.addEventListener('click', function(){
    calculatorIsOpen = !calculatorIsOpen;
    
    if(calculatorIsOpen === true){
        TicTacApp.style.display = "none";
        calculatorApp.style.display = "block";
        appChangerButton.innerHTML = "Open Tic Tac Toe";
        pageHeading.innerHTML = "Calculator"
    }
    else{
        TicTacApp.style.display = "block";
        calculatorApp.style.display = "none";
        appChangerButton.innerHTML = "Open Calculator";
        pageHeading.innerHTML = "Tic Tac Toe";
    }
});


tiles.forEach(function(tile){
    tile.addEventListener('click', function(){
        if(gameOver) return;
        let index = this.id.split("-");
        let row = (Number)(index[0]);
        let col = (Number)(index[1]);
        
        if(board[row][col] !== '') return;
    
        board[row][col] = curPlayer;
        this.innerText = curPlayer;
    
        if(curPlayer === player1){
            curPlayer = player2;
        }
        else{
            curPlayer = player1;
        }
    
        checkWinner();
    
    });
});


const checkWinner = function(){
    checkRowWin();
    checkColumnWin();
    checkDiagonalWin();
    checkAntiDiagonalWin();
}


const checkRowWin = function(){
    for(let row = 0 ; row < 3 ; row++){
        if(board[row][0] !== '' && board[row][0] === board[row][1] && board[row][1] === board[row][2]){
            for(let i = 0; i < 3; i++){
                let tile = document.getElementById(row + "-" + i);
                tile.style.backgroundColor = "green";    
            }

            document.getElementById("won").style.display = "block";
            winningPlayer.innerHTML =  (curPlayer === player1) ? "Player 2" : "Player 1";
            confetti.start();
            gameOver = true;
            return;
        }
    }
}

const checkColumnWin = function(){
    for(let col = 0; col < 3 ; col++){
        if(board[0][col] !== '' && board[0][col] === board[1][col] && board[1][col] === board[2][col]){
            for(let i = 0; i < 3 ; i++){
                let tile = document.getElementById(i + "-" + col);
                tile.style.backgroundColor = "green";
            }
            document.getElementById("won").style.display = "block";
            winningPlayer.innerHTML =  (curPlayer === player1) ? "Player 2" : "Player 1";
            confetti.start();
            gameOver = true;
            return;
        }
    }
}

const checkDiagonalWin = function(){
    if(board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]){
        for(let i = 0; i < 3; i++){
            let tile = document.getElementById(i + "-" + i);
            tile.style.backgroundColor = "green";
        }
        document.getElementById("won").style.display = "block";
        winningPlayer.innerHTML =  (curPlayer === player1) ? "Player 2" : "Player 1";
        confetti.start();
        gameOver = true;
        return;
    }
}

const checkAntiDiagonalWin = function(){
    if(board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]){
        let tile = document.getElementById(0 + "-" + 2);
        tile.style.backgroundColor = "green";

        tile = document.getElementById(1 + "-" + 1);
        tile.style.backgroundColor = "green";

        tile = document.getElementById(2 + "-" + 0);
        tile.style.backgroundColor = "green";
        
        document.getElementById("won").style.display = "block";
        winningPlayer.innerHTML =  (curPlayer === player1) ? "Player 2" : "Player 1";
        confetti.start();
        gameOver = true;
        return; 
    }
}



const ESCkeyWonClose = (event) =>{
    event.key === 'Escape' ? document.getElementById("won").style.display = "none" : "" ;
    resetAll();
}

document.addEventListener('keydown', ESCkeyWonClose);

HideWon.addEventListener("click", function(){
    document.getElementById("won").style.display = "none";
    resetAll();
});

const resetAll = function(){
    curPlayer = player1;
    gameOver = false;
    board = [['', '', ''], ['', '', ''], ['', '', '']];
    tiles.forEach(function(tile){
        tile.innerText = '';
        tile.style.backgroundColor = "#DA1212";
    });
    confetti.stop();
    document.getElementById("won").style.display = "none";
}

playAgain.addEventListener('click', resetAll);


let calculatorResult = "";
calculatorButtons.forEach(function(button){
    button.addEventListener('click', function(event){
        if(event.target.innerHTML == 'C'){
            calculatorResult = "";
            calculatorInput.value = "";
        }
        else if(event.target.innerHTML == '='){
            calculatorResult = eval(calculatorResult);
            calculatorInput.value = calculatorResult;
        }
        else{
            calculatorResult = calculatorResult + event.target.innerHTML;
            calculatorInput.value = calculatorResult;
        }
        
    });
});



