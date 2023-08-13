class Stack {

    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }
    
    add(value) {

        let node = new Node(value);

        let prevNode = this.head;

        node.next = prevNode;

        this.head = node;
        this.size++;
    }
    
    //for queue
    remove() {
        
        if ( this.size === 0 )
            return;
        
        let head = this.head
        
        this.head = this.head.next;
        head.next = null;
        
        this.size--;
    }
}

class Node {

    constructor(value) {
        this.value = value === undefined ? null : value;
        this.next  = null;
    }
}

let ll = new Stack();

ll.add(2)
ll.add(3)
ll.add(3)
ll.add(3)
ll.remove()
ll.remove()
ll.remove()
console.log(ll)