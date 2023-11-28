function swapNodes (index,queries){
    const node = (value,depth => ({
        value: value, 
        depth:depth
    }))
let tree = [Node(1,1)]
for(let i =0; i< index.length; i++){
    let lefttree = index[i][0];
    let righttree = index[i][1];

}
// getting current depth of the tree
let depth = tree[i].depth;
// adding the new node to tree
addNode(lefttree,depth + 1);
addNode(righttree,depth+1);
//assinging the new children to current node
tree[i].lefttree = lefttree;
tree[i].righttree = righttree;
}