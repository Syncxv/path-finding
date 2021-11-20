const nodes = []
let isMouseDown = false
class _Node {
    constructor(node, col, row) {
        this.col = col
        this.row = row
        this.node = node
        this.visited = false
        this.distance = Infinity
    }
}
export function createNode(append = false, col, row) {
    const NodeElem = document.createElement('div')
    NodeElem.classList.add('node');
    NodeElem.addEventListener('mousedown', nodeMousedownHandler)
    NodeElem.addEventListener('mouseenter', nodeMouseEnterHandler)
    NodeElem.addEventListener('mouseup', nodeMouseUpHandler)
    NodeElem.ondragstart = () => (false)
    if(append){
        document.querySelector('.node-container').append(NodeElem)
    }
    return new _Node(NodeElem, col, row)
}
// get node() {
//     return NodeElem
// },
// get visited() {
//     return NodeElem.classList.contains('visited')
// },
// get distance() {
//     return Infinity
// },


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

export function getNodes() {
    return nodes
}