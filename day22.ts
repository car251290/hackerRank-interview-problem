interface Node {
    left: Node |null;
    right: Node | null;
}

const getHeight = (node: Node, h=0)=>{
    if(node === null){
        if(h===0) return 0;
        return h -1;
    }
    const left = node.left;
    const right = node.right;
    h++;
    h = Math.max(getHeight(left, h), getHeight(right, h));
};

