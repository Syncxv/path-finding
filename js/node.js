const nodes = []
let isMouseDown = false
class _Node {
    constructor(node) {
        this.node = node
    }

    get visited() {
        return this.node.classList.contains('visited')
    }
}
export function createNode(append = false) {
    const NodeElem = document.createElement('div')
    NodeElem.classList.add('node');
    NodeElem.addEventListener('mousedown', nodeMousedownHandler)
    NodeElem.addEventListener('mouseenter', nodeMouseEnterHandler)
    NodeElem.addEventListener('mouseup', nodeMouseUpHandler)
    NodeElem.ondragstart = () => (false)
    if(append){
        document.querySelector('.node-container').append(NodeElem)
    }
    nodes.push(new _Node(NodeElem))
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