class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length++;
    }
    return this;
  }
  //     reverse(){
  //       let node = this.head

  //     for(let i = 0; i <this.length; i++){
  //         const nextNode = node.next
  //         node.next = node.prev
  //         node.prev = nextNode
  //         node = nextNode
  //     }
  //     let head = this.head
  //     this.head = this.tail
  //     this.tail = head

  //    return this

  //     }

  reverse() {
    for (let node = this.head; node !== null; ) {
      const nextNode = node.next;
      node.next = node.prev;
      node.prev = nextNode;
      node = nextNode;
    }
    [this.head, this.tail] = [this.tail, this.head];

    return this;
  }
}

let dll = new DoublyLinkedList();
dll
  .push(1)
  .push(2)
  .push(3)
  .push(4);
dll.reverse();
