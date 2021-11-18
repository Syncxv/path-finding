let isMouseDown = false

function getContainer() {
    return document.querySelector('.node-container')
}
function createGrid(x, y) {
    const contaier = getContainer()
    for(let i = 0; i < x; ++i) {
        for(let j = 0; j < y; ++j) {
            createNode()
        }
        // var jump = document.createElement("br");
        // document.querySelector('.node-container').appendChild(jump);
    }
    contaier.style.setProperty('--x', x)
    contaier.removeChild(getContainer().lastChild)
}

function createNode() {
    const node = document.createElement('div')
    node.classList.add('node');
    node.addEventListener('mousedown', nodeMousedownHandler)
    node.addEventListener('mouseenter', nodeMouseEnterHandler)
    node.addEventListener('mouseup', nodeMouseUpHandler)
    node.ondragstart = () => (false)
    document.querySelector('.node-container').append(node)
}

function nodeMousedownHandler(e) {
    isMouseDown = true
    
}
function nodeMouseEnterHandler(e) {
    if(!e.target.classList.contains('wall') && isMouseDown) {
        console.log(e)
        e.target.classList.add('wall')
    }
}
function nodeMouseUpHandler(e) {
    isMouseDown = false
}
function setUp() {
    createGrid(70, 40)
    getContainer().ondragstart = () => (false)
}

setUp();