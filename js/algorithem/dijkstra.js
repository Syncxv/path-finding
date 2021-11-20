import { getNodes } from "../node.js";

export function dijkstra(grid, start, end) {
    start.distance = 0
    const nodes = getAllNodes()
    const visited = []
    while(nodes.length) {
        sortByDistance(nodes)
        const closestNode = nodes.shift()
        if(closestNode.wall) continue
        closestNode.visited = true
        visited.push(closestNode)
        const nearsetNodes = getNearestNodes(closestNode, grid);
        updateNearbyNodes(nearsetNodes, closestNode);
        if(closestNode == end) return visited
    }
}

function sortByDistance(nodes) {
    return nodes.sort((a, b) => a.distance - b.distance)
}
function updateNearbyNodes(nearNodes, node) {
    nearNodes.forEach(nearNode => {
        nearNode.distance = node.distance + 1
        nearNode.prevNode = node
    })
}
function getNearestNodes(node, grid) {
    const res = []
    const {row, col} = node
    if(grid[row+1] ) res.push(grid[row+1][col])
    if(grid[row-1] ) res.push(grid[row-1][col])
    if(grid[row][col+1] ) res.push(grid[row][col+1])
    if(grid[row][col-1] ) res.push(grid[row][col-1])
    return res
}

function getAllNodes() {
    const res = []
    grid.forEach(item => {
        item.forEach(node => res.push(node))    
    })
    return res
}
