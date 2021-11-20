import { dijkstra, getShortestNodes } from "./algorithem/dijkstra.js"
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
    document.querySelector('#animate').addEventListener('click', onClickHandler)
    document.querySelector("#clear").addEventListener('click', clearGrid)
}
function gridInit(row, col) {
    const grid = []
    for(let i = 0; i < row; ++i) {
        const currentRow = []
        for(let j = 0; j < col; ++j) {
            if(START_NODE.row == i && START_NODE.col == j) {
                currentRow.push(createNode(true, j, i, true, false))
                continue
            }
            if(END_NODE.row == i && END_NODE.col == j) {
                currentRow.push(createNode(true, j, i, false, true));
                continue
            }
            else currentRow.push(createNode(true, j, i))
        }
        grid.push(currentRow)
    }
    return grid
}
async function onClickHandler() {
    const result = dijkstra(grid, grid[START_NODE.row][START_NODE.col], grid[END_NODE.row][END_NODE.col])
    console.log(result)
    const path = getShortestNodes(result, grid[END_NODE.row][END_NODE.col])
    await animateIt(result)
    await animatePath(path)
    
}
function animateIt(visited) {
    return new Promise((res, rej) => {
        for(let i = 0; i < visited.length; ++i) {
            setTimeout(() => {
                const node = visited[i].node
                node.classList.add('visited')
                if(i == visited.length -1) res(true)
            }, 10 * i)
           
        }
        
    })
}
function animatePath(path) {
    return new Promise((res, rej) => {
        for(let i = 0; i < path.length; ++i) {
            setTimeout(() => {
                const node = path[i].node
                node.classList.add('path')
                if(i == path.length -1) res(true)
            }, 10 * i)
           
        }
        
    })
}
function clearGrid() {
    getContainer().innerHTML = ""
    createGrid(20, 50)
}
setUp();
