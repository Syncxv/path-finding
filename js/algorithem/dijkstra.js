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
        if(closestNode == end) return visited
        updateNearbyNodes(closestNode);
    }
}

function sortByDistance(unvisitedNodes) {
    return unvisitedNodes.sort((a, b) => a.distance - b.distance)
}
function updateNearbyNodes(node) {
    const nearNodes = getNearestUnvisitedNodes(node, grid);
    nearNodes.forEach(nearNode => {
        nearNode.distance = node.distance + 1
        nearNode.prevNode = node
    })
}
function getNearestUnvisitedNodes(node, grid) {
    const res = []
    const {row, col} = node
    if(grid[row+1] ) res.push(grid[row+1][col])
    if(grid[row-1] ) res.push(grid[row-1][col])
    if(grid[row][col+1] ) res.push(grid[row][col+1])
    if(grid[row][col-1] ) res.push(grid[row][col-1])
    return res.filter(s => !s.visited)
}

function getAllNodes() {
    const res = []
    grid.forEach(item => {
        item.forEach(node => res.push(node))    
    })
    return res
}


export function getShortestNodes(result, endNode) {
    const shortestNodes = []
    let currNode = endNode
    while (currNode !== null) {
        shortestNodes.unshift(currNode)
        currNode = currNode.prevNode
    }
    return shortestNodes
}