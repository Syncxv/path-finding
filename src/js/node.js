const nodes = [];
let isLeftMouseDown = false;
let isRightMouseDown = false;
class _Node {
    constructor(node, col, row, isStart, isEnd) {
        this.col = col
        this.row = row
        this.node = node
        this.visited = false
        this.distance = Infinity
        this.prevNode = null
        this.isStart = isStart
        this.isEnd = isEnd
    }
    get wall() {
        return this.node.classList.contains('wall')
    }
}
export function createNode(append = false, col, row, isStart = false, isEnd = false) {
    const NodeElem = document.createElement('div')
    NodeElem.classList.add('node');
    if(isStart) NodeElem.classList.add("start")
    if(isEnd) NodeElem.classList.add("end")
    NodeElem.addEventListener('mousedown', nodeMousedownHandler)
    NodeElem.addEventListener('mouseenter', nodeMouseEnterHandler)
    NodeElem.addEventListener('mouseup', nodeMouseUpHandler)
    NodeElem.ondragstart = () => (false)
    NodeElem.oncontextmenu = () => (false)
    if(append){
        document.querySelector('.node-container').append(NodeElem)
    }
    return new _Node(NodeElem, col, row, isStart, isEnd)
}

function nodeMousedownHandler(e) {
    switch (e.which) {
        case 1: 
            isLeftMouseDown = true
            break;
        case 2: 
            alert('middle'); 
            break;
        case 3: 
            isRightMouseDown = true
            break; 
    }
    
}
function nodeMouseEnterHandler(e) {
    if(!e.target.classList.contains('wall') && isLeftMouseDown) {
        console.log(e)
        e.target.classList.add('wall')
    }
    else if(e.target.classList.contains('wall') && isRightMouseDown) {
        console.log(e)
        e.target.classList.remove('wall')
    }
}
function nodeMouseUpHandler(e) {
    switch (e.which) {
        case 1: 
            isLeftMouseDown = false
            break;
        case 2: 
            alert('middle'); 
            break;
        case 3: 
            isRightMouseDown = false
            break; 
    }
}

export function getNodes() {
    return nodes
}