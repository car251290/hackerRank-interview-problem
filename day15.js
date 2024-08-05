
function main(){
    this.insert = function(head,data){
        const newNode = new Node(data);
        if(!head){
            head = newNode;

        } else {
            let currentNode = head;
            while(currentNode.next){
                currentNode = currentNode.next;

            }
            currentNode.next = newNode;
        }
        return head;
    }
}