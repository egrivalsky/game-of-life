let board = document.getElementById('board')
let width = 1000
let height = 1000
let cellSize = 100
let generationDisplay = document.getElementById('generation-counter');
let generationNumber = 0;
let auto;

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
    }   
}

function checkAliveCells(n) {
    let thisCell = document.getElementById(n);
    let neighbors = [];
    let aliveNeighbors = 0;

    //DEFINING NEIGHBORS since board is not infinite
    //FOR CORNER CELLS
    //top left
    if (n === 1) {
        neighbors = [
            document.getElementById(n+1),
            document.getElementById(n + (width/Math.sqrt(cellSize))),
            document.getElementById(n + (width/Math.sqrt(cellSize)) + 1),

        ]
    } else 
    //top right
    if (n === (width/Math.sqrt(cellSize))) {
        neighbors = [
            document.getElementById(n-1),
            document.getElementById(n + (width/Math.sqrt(cellSize))),
            document.getElementById(n + (width/Math.sqrt(cellSize)) - 1),
        ]
    } else
    //bottom left 
    if (n === (width/Math.sqrt(cellSize) * height/Math.sqrt(cellSize)) - (width/Math.sqrt(cellSize) - 1)) {
        neighbors = [
            document.getElementById(n+1),
            document.getElementById(n - (width/Math.sqrt(cellSize))),
            document.getElementById(n - (width/Math.sqrt(cellSize)) + 1),
        ]
    } else
    //bottom right
    if (n === width/Math.sqrt(cellSize) * height/Math.sqrt(cellSize)) {
        neighbors = [
            document.getElementById(n-1),
            document.getElementById(n - (width/Math.sqrt(cellSize))),
            document.getElementById(n - (width/Math.sqrt(cellSize)) - 1),
        ]

    } else
    //CELLS ON EDGE ROWS (corners already ruled out by above if statements)
    //for cells on the top row
    if (n <= width / Math.sqrt(cellSize)) {
            neighbors = [
            document.getElementById(n-1),
            document.getElementById(n+1),
            document.getElementById(n + (width/Math.sqrt(cellSize)) - 1),
            document.getElementById(n + (width/Math.sqrt(cellSize))),
            document.getElementById(n + (width/Math.sqrt(cellSize)) + 1)
        ]
    } else
    //for cells on the bottom row 
    if (n > (width * height/cellSize) - cellSize) {
        neighbors = [
            document.getElementById(n-1),
            document.getElementById(n+1),
            document.getElementById(n - (width/Math.sqrt(cellSize)) - 1),
            document.getElementById(n - (width/Math.sqrt(cellSize))),
            document.getElementById(n - (width/Math.sqrt(cellSize)) + 1)
        ]
    } else
    // //for cells on left column
    if (n % (width/Math.sqrt(cellSize)) === 1) {
        neighbors = [
            document.getElementById(n + 1),
            document.getElementById(n - (width/Math.sqrt(cellSize))),
            document.getElementById(n + (width/Math.sqrt(cellSize))),
            document.getElementById(n - (width/Math.sqrt(cellSize)) + 1),
            document.getElementById(n + (width/Math.sqrt(cellSize)) + 1),
        ]
    } else 
    //for cells on the right column
    if (n % (width/Math.sqrt(cellSize)) === 0) {
        neighbors = [
            document.getElementById(n - 1),
            document.getElementById(n - (width/Math.sqrt(cellSize))),
            document.getElementById(n + (width/Math.sqrt(cellSize))),
            document.getElementById(n - (width/Math.sqrt(cellSize)) - 1),
            document.getElementById(n + (width/Math.sqrt(cellSize)) - 1),
        ]
    } else 
    // FOR ALL OTHER CELLS
        neighbors = [
            document.getElementById(n-1),
            document.getElementById(n+1),
            document.getElementById(n + (width/Math.sqrt(cellSize))),
            document.getElementById(n - (width/Math.sqrt(cellSize))),
            document.getElementById(n + (width/Math.sqrt(cellSize)) + 1),
            document.getElementById(n + (width/Math.sqrt(cellSize)) - 1),
            document.getElementById(n - (width/Math.sqrt(cellSize)) + 1),
            document.getElementById(n - (width/Math.sqrt(cellSize)) - 1),
    ]

    //adds up total neighbors if thisCell
    for (let i = 0; i < neighbors.length; i++) {
        if (neighbors[i].classList.contains('alive')) {
            aliveNeighbors++;
        }
        // neighbors[i].classList.add('test');
    }
    //Conway's rules for alive cells
    // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
    // Any live cell with two or three live neighbours lives on to the next generation.
    // Any live cell with more than three live neighbours dies, as if by overpopulation.
    if (aliveNeighbors < 2 || aliveNeighbors > 3) {
        thisCell.classList.add('kill')
    }
    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    if (thisCell.classList.contains('alive') === false && aliveNeighbors === 3) {
        thisCell.classList.add('create')
    }
}

function checkDeadCells() {
    
}

// next generation
function nextGeneration() {
    //loop to tag cells that will change
    for (let n = 1; n <= (width * height) / cellSize; n++) {
        let thisCell = document.getElementById(n);
        checkAliveCells(n)
        // // thisCell.classList.add('test')
        // if (thisCell.classList.contains('alive')){
        //     checkAliveCells(n);
        // } else {
        //     checkDeadCells()
        // }
    }
    //loop again to actually makes the changes
    for (let n = 1; n <= (width * height) / cellSize; n++) {
        let thisCell = document.getElementById(n)
        if (thisCell.classList.contains('kill')) {
            thisCell.classList.remove('alive');
            thisCell.classList.remove('kill');
        }
        if (thisCell.classList.contains('create')) {
            thisCell.classList.add('alive');
            thisCell.classList.remove('create');
        }
    }
    generationNumber++;
    generationDisplay.innerText = 'Generation: ' + generationNumber;
}

function runAuto() {
        auto = setInterval(nextGeneration, 1000);
}

function stopAuto() {
    clearInterval(auto)
}

function clearBoard() {
    for (let n = 1; n <= (width * height) / cellSize; n++) {
        let thisCell = document.getElementById(n);
        if (thisCell.classList.contains('alive')) {
            thisCell.classList.remove('alive');
        }
        if (thisCell.classList.contains('kill')) {
            thisCell.classList.remove('kill');
        }
    }
    generationNumber = 0;
}

let generationButton = document.getElementById('next-generation');
let startOverButton = document.getElementById('start-over');
let autoButton = document.getElementById('auto');
let stopButton = document.getElementById('stop');
autoButton.addEventListener('click', runAuto);
generationButton.addEventListener('click', nextGeneration);
startOverButton.addEventListener('click', clearBoard);
stopButton.addEventListener('click', stopAuto)

