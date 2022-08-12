
/** declare a node, with data and next propery */
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/** declare a intial linkedlist with empty head and size   */

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert the node at the begining
    insertNodeFirst(data) {
        /** pass the data and create a node */
        let node = new Node(data, this.head);
        /** assign the node item to the head */
        this.head = node;
        this.size++;
    }
    insertNodeLast(data) {
        let node = new Node(data);
        let current;
        /** check if head is empty */
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    insertAtIndex(index, data) {

        /** check if index is outof bound */
        if (index < 0 || index > this.size) { return }
        if (index == 0) {
            this.head = new Node(data, this.head)
            return;
        }
        let node = new Node(data);
        let previous, current;
        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current; // Node before index
            count++;    // incrment count
            current = current.next; // Node after the index
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }
    removeAtIndex(index) {
        let current = this.head;
        let previous;
        let count = 0;
        if (index == 0) { this.head = this.current.next; }
        while (count < index) {
            count++;
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        this.size--;

    }
    printNodeItems() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }

}


let ll = new LinkedList();
ll.insertNodeFirst(200);
ll.insertNodeFirst(300);
ll.insertNodeFirst(400);
ll.insertNodeLast(100);
ll.insertAtIndex(4, 5);
ll.removeAtIndex(2);
ll.printNodeItems()