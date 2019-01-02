class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    if (!this.head) {
      this.tail = this.head = new LinkListNode(value);
      this.length++;
      return this;
    }

    let newLinkListNode = new LinkListNode(value);
    this.tail.next = newLinkListNode;
    this.tail = newLinkListNode;
    this.length++;

    return this;
  }
  insert(value, i) {
    if (!this.head || i > this.length) {
      return this.push(value);
    }

    let prev = this.head;
    let current = prev.next;

    let j = 0;
    i--;
    while (current && j < i) {
      prev = current;
      current = current.next;
      j++;
    }

    let newLinkListNode = new LinkListNode(value);
    newLinkListNode.next = prev.next;
    prev.next = newLinkListNode;
    ++this.length;
    return this;
  }

  shift() {
    if (!this.head) return "empty list";
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.length--;
    return value;
  }
  pop() {
    if (!this.head) return "empty list";
    let current = this.head;
    let prev = this.head;
    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;
    return this;
  }

  unshift(value) {
    if (!this.head) return this.push(value);
    let newLinkListNode = new LinkListNode(value);
    newLinkListNode.next = this.head;
    this.head = newLinkListNode;
    this.length++;
    return this;
  }

  set(i, value) {
    let element = this.get(i);
    if (element) {
      element.value = value;
      return this;
    }
    return false;
  }
  get(i) {
    if (i === undefined || i > this.length - 1) return "out of bound";
    let current = this.head;
    let j = 0;

    while (current && j < i) {
      current = current.next;
      j++;
    }
    return current;
  }
}

class LinkListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverse(list) {
  let prev = list.head;

  list.tail = prev;
  let current = prev.next;
  prev.next = null;

  let next;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  list.head = prev;
  return list;
}

// const linkList = new LinkList()
// linkList.push(1)
// linkList.push(2)
// linkList.push(3)

// linkList.push(555)

// reverse(linkList)
