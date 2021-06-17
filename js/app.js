
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

function checkAliveCells() {
    //for cells on the top row
    alert('button worked')
    if (n <= width / Math.sqrt(cellSize)) {
        let aliveNeighbors = 0;
        let neighbors = [
            document.getElementById(n-1),
            document.getElementById(n+1),
            document.getElementById(n + width - 1),
            document.getElementById(n + width),
            document.getElementById(n + width + 1)
        ]
        for (let i = 0; i < neighbors.length; i++) {
            // if (neighbors[i].classList.contains('alive')) {
            //     aliveNeighbors++;
            // }
            neighbors[i].classList.add('test')
        }    
        if (aliveNeighbors < 2) {
            thisCell.classList.remove('alive');
        }

    }

    //for cells on the bottom row 
    // if (n > (width * height/cellSize) - cellSize) {
    //     thisCell.classList.add('alive')
    // }
    // //for cells on left column
    // if (n % (width/Math.sqrt(cellSize)) ===1) {
    //     thisCell.classList.add('alive');
    // }
    // //for cells on the right column
    // if (n % (width/Math.sqrt(cellSize)) === 0) {
    //     thisCell.classList.add('alive');
    // }
}

// next generation
function nextGeneration() {
    for (let n = 1; n <= (width * height) / cellSize; n++) {
        let thisCell = document.getElementById(n);
        thisCell.classList.add('test')
        if (thisCell.classList.contains('alive')){
            checkAliveCells();
        } else {
            checkDeadCells()
        }
    }
}

let button = document.getElementById('next-generation')
button.addEventListener('click', nextGeneration);
