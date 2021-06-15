
let board = document.getElementById('board')
let width = 1000
let height = 1000
let cellSize = 100

function toggleCell(e) {

    let cell = e.target;
    if (cell.classList.contains('alive')) {
        cell.classList.remove('alive');
        cell.classList.add('dead');
        console.log(cell.classList)

    } else {
        cell.classList.add('alive')
    }

}

window.onload = function makeBoard() {
for (let n = 1; n <= (width * height) / cellSize; n++) {

    let cell = document.createElement('div');
    cell.setAttribute('id', n)
    cell.classList.add('cell');
    cell.addEventListener('click', toggleCell)
    board.appendChild(cell)
    // console.log(n)
}
    
}


// next generation
function nextGeneration() {
    for (let n = 1; n <= (width * height) / cellSize; n++) {
        let thisCell = document.getElementById(n);
        //for cells on the top row
        // if (n <= width / Math.sqrt(cellSize)) {
        //     thisCell.classList.add('alive')
        // }
        //for cells on the bottom row 
        if (n > (width * height/cellSize) - cellSize) {
            thisCell.classList.add('alive')
        }
    }
}

let button = document.getElementById('next-generation')
button.addEventListener('click', nextGeneration);
