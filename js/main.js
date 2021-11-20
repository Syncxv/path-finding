import { dijkstra } from "./algorithem/dijkstra.js"
import { createNode, getNodes } from "./node.js"
const START_NODE = {row: 2, col: 10};
const END_NODE = {row: 15, col: 40}
function getContainer() {
    return document.querySelector('.node-container')
}
function createGrid(x, y) {
    const contaier = getContainer()
    const grid = gridInit(x,y)
    window.grid = grid
    contaier.style.setProperty('--row', x)
    contaier.style.setProperty('--col', y)
    console.log(dijkstra(getNodes(), 0, 589))
    window.nodes = getNodes()
}
function setUp() {
    createGrid(50, 100)
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
