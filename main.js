let x = document.querySelectorAll('.btn-input');
let playerSelection = '1';
let playerChoice1 = 'X';
let playerChoice2 = 'O';
let submit = document.getElementById("submit");
let name1 = document.getElementById('name1');
let name2 = document.getElementById('name2');
let modal = document.getElementById("myModal");
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let update = document.getElementById('sel-3');

//function that takes the user input.
function addName() {
    if (name1.value === '' || name2.value === '') {
        alert("Please write both player names.")
        return false;
    } else {
        const player = document.querySelector('#playerName1');
        let player1 = document.getElementById('sel-1');
        let player2 = document.getElementById('sel-2');
        player1.textContent += `${name1.value}`;
        player2.textContent += `${name2.value}`;
        update.textContent = `It's your turn to play ${name1.value}`
        player.appendChild(player1);
        player.appendChild(player2);
        modal.style.display = 'none';
    }
}
submit.addEventListener('click', addName);

//function that renders X and O to the display.
function gamePlay() {
    x.forEach(button => {
        button.addEventListener('click', () => {
            if (playerSelection == 1 ){
                button.textContent = playerChoice1;
                playerSelection = 0;
                update.textContent = `It's your turn to play ${name2.value}`;

            } else {
                button.textContent = playerChoice2; 
                playerSelection = 1;
                update.textContent = `It's your turn to play ${name1.value}`;
            } 
        });
    });
}
gamePlay();


//function to check for when the game is over, 3-in-a-row and a tie and
//keeps players from playing in spots that are already taken.
function gameOver() {
    for (let i = 0; i < x.length; i++) {
        x[i].onclick = function () {
            x[i].disabled = true;
            if (x[0].textContent == 'X' && x[1].textContent == 'X' && x[2].textContent == 'X') {
                update.textContent = `Game Over,  ${name1.value} wins!!!`;
                x.forEach(button => {
                    button.disabled = true;
                });
            } else if (x[0].textContent == 'O' && x[1].textContent == 'O' && x[2].textContent == 'O') {
                update.textContent = `Game Over,  ${name2.value} wins!!!`;  
                x.forEach(button => {
                    button.disabled = true;
                });
            } else if (x[3].textContent == 'X' && x[4].textContent == 'X' && x[5].textContent == 'X') {
                update.textContent = `Game Over,  ${name1.value} wins!!!`;
                x.forEach(button => {
                    button.disabled = true;
                });
            } else if (x[3].textContent == 'O' && x[4].textContent == 'O' && x[5].textContent == 'O') {
                update.textContent = `Game Over,  ${name2.value} wins!!!`;
                x.forEach(button => {
                    button.disabled = true;
                });
            } else if (x[6].textContent == 'X' && x[7].textContent == 'X' && x[8].textContent == 'X') {
                update.textContent = `Game Over,  ${name1.value} wins!!!`;
                x.forEach(button => {
                    button.disabled = true;
                });
            } else if (x[6].textContent == 'O' && x[7].textContent == 'O' && x[8].textContent == 'O') {
                update.textContent = `Game Over,  ${name2.value} wins!!!`;
                x.forEach(button => {
                    button.disabled = true;
                });
            } else if (x[0].textContent == 'X' && x[3].textContent == 'X' && x[6].textContent == 'X') {
                update.textContent = `Game Over,  ${name1.value} wins!!!`;
                x.forEach(button => {
                    button.disabled = true;
                });
            } else if (x[0].textContent == 'O' && x[3].textContent == 'O' && x[6].textContent == 'O') {
                update.textContent = `Game Over,  ${name2.value} wins!!!`;
                x.forEach(button => {
                    button.disabled = true;
                });
            } else if (x[1].textContent == 'X' && x[4].textContent == 'X' && x[7].textContent == 'X') {
                update.textContent = `Game Over,  ${name1.value} wins!!!`;
                x.forEach(button => {
                    button.disabled = true;
                });
            } else if (x[1].textContent == 'O' && x[4].textContent == 'O' && x[7].textContent == 'O') {
                update.textContent = `Game Over,  ${name2.value} wins!!!`;
                x.forEach(button => {
                    button.disabled = true;
                });
            } else if (x[2].textContent == 'X' && x[5].textContent == 'X' && x[8].textContent == 'X') {
                update.textContent = `Game Over,  ${name1.value} wins!!!`;
                x.forEach(button => {
                    button.disabled = true;
                });
            } else if (x[2].textContent == 'O' && x[5].textContent == 'O' && x[8].textContent == 'O') {
                update.textContent = `Game Over,  ${name2.value} wins!!!`;
                x.forEach(button => {
                    button.disabled = true;
                });
            } else if (x[0].textContent == 'X' && x[4].textContent == 'X' && x[8].textContent == 'X') {
                update.textContent = `Game Over,  ${name1.value} wins!!!`;
                x.forEach(button => {
                    button.disabled = true;
                });
            } else if (x[0].textContent == 'O' && x[4].textContent == 'O' && x[8].textContent == 'O') {
                update.textContent = `Game Over,  ${name2.value} wins!!!`;
                x.forEach(button => {
                    button.disabled = true;
                });
            } else if (x[2].textContent == 'X' && x[4].textContent == 'X' && x[6].textContent == 'X') {
                update.textContent = `Game Over,  ${name1.value} wins!!!`;
                x.forEach(button => {
                    button.disabled = true;
                });
            } else if (x[2].textContent == 'O' && x[4].textContent == 'O' && x[6].textContent == 'O') {
                update.textContent = `Game Over,  ${name2.value} wins!!!`;
                x.forEach(button => {
                    button.disabled = true;
                });
            } else {
                //update.textContent = `Game Over,  It's a draw`;
            }
        }
    }
}
gameOver();

