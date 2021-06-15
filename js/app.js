
let board = document.getElementById('board')
let width = 1000
let height = 1000
let cellSize = 100



window.onload = function makeBoard() {
for (let n = 1; n <= (width * height) / cellSize; n++) {

    let cell = document.createElement("div");
    cell.setAttribute('id', n)
    cell.classList.add('cell');
    board.appendChild(cell)
    // console.log(n)
}
    
}

function toggleCell() {
    alert('toggleCell function activated');
    let cell = document.getElementsByClassName('cell');
    if ('alive' in cell.classList) {
        cell.classList.remove('alive');
    } else {
        cell.classList.add('alive');
    }

}

const thisCell = document.getElementsByClassName('cell')

thisCell.addEventListener('click', toggleCell)