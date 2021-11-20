import { getNodes } from "../node.js";

export function dijkstra(grid, start, end) {
    console.log(grid, start, end)
    start.distance = 0
    const nodes = getAllNodes()
    const unvisitedNodes = getAllNodes()
    const visitedInOrder = []
    while(unvisitedNodes.length) {
        sortByDistance(nodes)
        const closestNode = nodes.shift()
        if(closestNode.wall) continue
        if(closestNode.distance === Infinity) return visitedInOrder
        closestNode.visited = true
        visitedInOrder.push(closestNode)
        if(closestNode == end) return visitedInOrder
        updateNearbyNodes(closestNode, grid);
    }
}

function sortByDistance(unvisitedNodes) {
    return unvisitedNodes.sort((a, b) => a.distance - b.distance)
}
function updateNearbyNodes(node, grid) {
    const nearNodes = getNearestUnvisitedNodes(node, grid);
    nearNodes.forEach(nearNode => {
        nearNode.distance = node.distance + 1
        nearNode.prevNode = node
    })
}
function getNearestUnvisitedNodes(node, grid) {
    const res = []
    const {col, row} = node;
    if (row > 0) res.push(grid[row - 1][col]);
    if (row < grid.length - 1) res.push(grid[row + 1][col]);
    if (col > 0) res.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) res.push(grid[row][col + 1]);
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