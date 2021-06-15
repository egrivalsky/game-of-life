
let board = document.getElementById('board')
let width = 1000
let height = 1000
let cellSize = 100
let cell


window.onload = function makeBoard() {
for (let n = 1; n <= (width * height) / cellSize; n++) {

    cell = document.createElement("div");
    cell.setAttribute('id', n)
    cell.classList.add('cell');
    board.appendChild(cell)
    // console.log(n)
}

    
}