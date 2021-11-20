import { createNode, getNodes } from "./node.js"

function getContainer() {
    return document.querySelector('.node-container')
}
function createGrid(x, y) {
    const contaier = getContainer()
    for(let i = 0; i < x; ++i) {
        for(let j = 0; j < y; ++j) {
            createNode(true)
        }
    }
    contaier.style.setProperty('--x', x)
    console.log(getNodes())
}
function setUp() {
    createGrid(70, 40)
    getContainer().ondragstart = () => (false)
}

setUp();