import { dijkstra } from "./algorithem/dijkstra.js"
import { createNode, getNodes } from "./node.js"

function getContainer() {
    return document.querySelector('.node-container')
}
function createGrid(x, y) {
    const contaier = getContainer()
    const grid = []
    for(let i = 0; i < x; ++i) {
        const currentRow = []
        for(let j = 0; j < y; ++j) {
            currentRow.push(createNode(true, j, i))
            
        }
        grid.push(currentRow)
    }
    window.grid = grid
    contaier.style.setProperty('--x', x)
    console.log(dijkstra(getNodes(), 0, 589))
    window.nodes = getNodes()
}
function setUp() {
    createGrid(70, 40)
    getContainer().ondragstart = () => (false)
}

setUp();
