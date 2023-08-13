
class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }
    
    add(value) {

        let node = new Node(value)
        
        if ( this.size === 0 )
        {
            this.head = node;
            this.tail = node;
            
            this.size++;
            
            return;
        }
        
       this.tail.next = node;
       this.tail      = node;
       
       this.size++;
    }
    
    //for queue
    remove() {
        
        if ( this.size === 1 )
        {
            this.head = null;
            this.tail = null;
            this.size--;
            return;
        }
       
       let temp = this.head;
       
       this.head = this.head.next;
       temp.next = null;
       
       this.size--;
    }

    // removeForStack() {
        

    // }
}

class Node {

    constructor(value) {
        this.value = value === undefined ? null : value;
        this.next  = null;
    }
}

let ll = new LinkedList();

ll.add(2)
ll.add(3)
ll.remove()
ll.remove()
console.log(ll)