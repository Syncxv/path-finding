import { dijkstra, getShortestNodes } from "./algorithem/dijkstra.js"
import { createNode, getNodes } from "./node.js"
const START_NODE = {row: 15, col: 5};
const END_NODE = {row: 15, col: 35}
const ROWS = 30;
const COLS = 40;
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
    createGrid(ROWS, COLS)
    getContainer().ondragstart = () => (false)
    document.querySelector('#animate').addEventListener('click', onClickHandler)
    document.querySelector("#clear").addEventListener('click', clearGrid)
    const input = document.querySelector("input")
    document.querySelector('#range-res').innerText = `${input.value}ms`
    input.addEventListener('input', (e) => {
        document.querySelector('#range-res').innerText = `${e.target.value}ms`
    })
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
    if(document.querySelector('select').value == "dijkstra") {
        const result = dijkstra(grid, grid[START_NODE.row][START_NODE.col], grid[END_NODE.row][END_NODE.col])
        console.log(result)
        const path = getShortestNodes(result, grid[END_NODE.row][END_NODE.col])
        await animateIt(result)
        await animatePath(path)
    } else {
        document.write("nope not done yet")
    }
    
}
function animateIt(visited) {
    return new Promise((res, rej) => {
        for(let i = 0; i < visited.length; ++i) {
            setTimeout(() => {
                const node = visited[i].node
                node.classList.add('visited')
                if(i == visited.length -1) res(true)
            }, document.querySelector("input").value * i)
           
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
    createGrid(ROWS, COLS)
}
setUp();
