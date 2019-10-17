
const max = 1000;
const setPoint = ['a','b','c','d','e'];
const distance = [
    [0,4,7,max,max],
    [4,0,8,max,max],
    [7,8,0,5,8],
    [max, 6, 5, 0, max],
    [max, max, 7, max, 0]
]

function Node(value) {
    this.value = value;
    this.neighbor = [];
}
function prim(setPoint, distance, target) {
    
}

prim(setPoint,distance,'c');