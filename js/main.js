import { dijkstra } from "./algorithem/dijkstra.js"
import { createNode, getNodes } from "./node.js"
const START_NODE = {row: 10, col: 5};
const END_NODE = {row: 10, col: 45}
function getContainer() {
    return document.querySelector('.node-container')
}
function createGrid(row, col) {
    const contaier = getContainer()
    const grid = gridInit(row,col)
    window.grid = grid
    contaier.style.setProperty('--row', row)
    contaier.style.setProperty('--col', col)
}
function setUp() {
    createGrid(20, 50)
    getContainer().ondragstart = () => (false)
}
function gridInit(row, col) {
    const grid = []
    for(let i = 0; i < row; ++i) {
        const currentRow = []
        for(let j = 0; j < col; ++j) {
            if(START_NODE.row == i && START_NODE.col == j) currentRow.push(createNode(true, j, i, true))
            if(END_NODE.row == i && END_NODE.col == j) currentRow.push(createNode(true, j, i, false, true))
            else currentRow.push(createNode(true, j, i))
        }
        grid.push(currentRow)
    }
    return grid
}
setUp();
