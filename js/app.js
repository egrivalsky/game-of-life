let board = document.getElementById('board')
let width = 1000
let height = 1000
let cellSize = 100

function toggleCell(e) {

    let cell = e.target;
    if (cell.classList.contains('alive')) {
        cell.classList.remove('alive');
        // cell.classList.add('dead');
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

function checkAliveCells(n) {
    let thisCell = document.getElementById(n);
    let neighbors = [];
    let aliveNeighbors = 0;

    //for cells on the top row
    if (n <= width / Math.sqrt(cellSize)) {
            neighbors = [
            document.getElementById(n-1),
            document.getElementById(n+1),
            document.getElementById(n + (width/Math.sqrt(cellSize)) - 1),
            document.getElementById(n + (width/Math.sqrt(cellSize))),
            document.getElementById(n + (width/Math.sqrt(cellSize)) + 1)
        ]
    }

    for (let i = 0; i < neighbors.length; i++) {
        if (neighbors[i].classList.contains('alive')) {
            aliveNeighbors++;
        }
    }
    
    if (aliveNeighbors < 2) {
        thisCell.classList.add('kill')
    }
    // if (aliveNeighbors < 2) {
    //     thisCell.classList.remove('alive');
    // }


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

function checkDeadCells() {
    
}

// next generation
function nextGeneration() {
    //loop to tag cells that will change
    for (let n = 1; n <= (width * height) / cellSize; n++) {
        let thisCell = document.getElementById(n);
        // thisCell.classList.add('test')
        if (thisCell.classList.contains('alive')){
            checkAliveCells(n);
        } else {
            checkDeadCells()
        }
    }
    //loop again to actually makes the changes
    for (let n = 1; n <= (width * height) / cellSize; n++) {
        let thisCell = document.getElementById(n)
        if (thisCell.classList.contains('kill')) {
            thisCell.classList.remove('alive');
            thisCell.classList.remove('kill');
        }
    }
}

let generationButton = document.getElementById('next-generation')
let startOverButton = document.getElementById('start-over')
generationButton.addEventListener('click', nextGeneration);
