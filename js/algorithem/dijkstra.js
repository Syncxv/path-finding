import { getNodes } from "../node.js";

export function dijkstra(grid, start, end) {
    //fuck sake nigga what is this
    // console.log(nodes)
    // nodes[start].distance = 0
    // console.log(nodes[start])
    // // console.log("NORMAL:", getNodes(),"SORTED:",sortByDistance(nodes))
    // // while(nodes.length) {
    // //     sortByDistance(nodes)
    // //     const nearestNode = nodes.shift()
    // //     nearestNode.visited = true

    // // }
}

function sortByDistance(nodes) {
    return nodes.sort((a, b) => a.distance - b.distance)
}

function getNearestNodes(grid_nodes, nodes) {
    
}