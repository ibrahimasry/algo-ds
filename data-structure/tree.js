class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  insertRecursively(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    const insertHelper = (val, current) => {
      if (this.root === null) {
        this.root = new Node(val);
        return this;
      }

      if (val === current.value) return this;
      if (current.value > val) {
        return insertHelper(
          val,
          (current.left = current.left || new Node(val))
        );
      } else {
        return insertHelper(
          val,
          (current.right = current.right || new Node(val))
        );
      }
    };
    return insertHelper(val, this.root);
  }
  // }

  insertIteratively(val) {
    let newNode = new Node(val);
    if (!this.root) {
      return (this.root = newNode);
    }
    let current = this.root;

    while (current) {
      if (current.value === val) return this;
      if (current.value > val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contain(val) {
    const containHelper = (val, current) => {
      if (current.value === val) return true;
      if (current.value > val && current.left)
        return containHelper(val, current.left);
      else if (current.value < val && current.right)
        return containHelper(val, current.right);
      else return false;
    };

    return containHelper(val, this.root);
  }

  finMin() {
    if (!this.root) return null;
    const helper = current => {
      if (!current.left) return current.value;
      return helper(current.left);
    };
    return helper(this.root);
  }
  finMax() {
    if (!this.root) return null;

    const helper = current => {
      if (!current.right) return current.value;
      return helper(current.right);
    };
    return helper(this.root);
  }

  findMaxHeight() {
    if (!this.root) return null;

    const helper = (current, height = 0) => {
      if (!current) return height;
      const leftHeight = helper(current.left, height + 1);
      const rightHeight = helper(current.right, height + 1);
      return Math.max(leftHeight, rightHeight);
    };
    return helper(this.root);
  }

  findMinHeight() {
    if (!this.root) return null;

    const helper = (current, height = 0) => {
      if (!current) return height;
      const leftHeight = helper(current.left, height + 1);
      const rightHeight = helper(current.right, height + 1);
      return Math.min(leftHeight, rightHeight);
    };

    return helper(this.root);
  }

  isBalanced() {
    let min = -1;
    let max = -1;
    const helper = (current, height = 0) => {
      if (!current) return height - 1;
      const leftHeight = helper(current.left, height + 1);
      const rightHeight = helper(current.right, height + 1);
      min = Math.min(leftHeight, rightHeight, min);
      max = Math.max(leftHeight, rightHeight, max);
    };

    return max - min <= 1;
  }

  inOrder() {
    if (!this.root) return null;

    const arr = [];
    const helper = current => {
      if (!current) return;
      helper(current.left);
      arr.push(current.value);
      helper(current.right);
    };

    helper(this.root);
    return arr;
  }

  preOrder() {
    if (!this.root) return null;

    const arr = [];
    const helper = current => {
      if (!current) return;
      arr.push(current.value);
      helper(current.left);
      helper(current.right);
    };

    helper(this.root);
    return arr;
  }

  postOrder() {
    if (!this.root) return null;

    const arr = [];
    const helper = current => {
      if (!current) return;
      helper(current.left);
      helper(current.right);
      arr.push(current.value);
    };

    helper(this.root);
    return arr;
  }
  levelOrder() {
    if (!this.root) return null;

    const arr = [];
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      const value = current.value;
      arr.push(value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return arr;
  }

  reversedlevelOrder() {
    if (!this.root) return null;
    const arr = [];
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      const value = current.value;
      arr.push(value);
      if (current.right) queue.push(current.right);
      if (current.left) queue.push(current.left);
    }

    return arr;
  }

  remove(value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // find the target value and its parent
    const findValue = (node = this.root) => {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        return null;
      }
    };

    findValue();
    if (target === null) {
      return null;
    }
    // count the children of the target to delete
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // case 1: target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // case 2: target has one child
    else if (children == 1) {
      var newChild = target.left !== null ? target.left : target.right;
      if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
      target = null;
    }
    // case 3: target has two children, change code below this line
    else {
      if (target === this.root) {
        let left = this.root.left;
        this.root = this.root.right;
        this.root.left = left;
        return;
      }
      const [smallest, itsParent] = this.findMinRight(target.right);
      target.value = smallest.value;
      if (smallest.right) {
        target.right = smallest.right;
      } else {
        itsParent.left = null;
      }
    }
  }

  findMinRight(current) {
    const helper = (current, parent = null) => {
      if (!current.left) return [current, parent];
      return helper(current.left, current);
    };
    return helper(current);
  }
  // with queue
  invert() {
    if (this.root === null) return null;
    const queue = [this.root];

    while (queue.length) {
      const current = queue.shift();
      const left = current.left;
      current.left = current.right;
      current.right = left;

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return this.inOrder();
  }
  // with link list
  invert1() {
    if (this.root === null) return null;
    const linklist = new LinkList();
    linklist.push(this.root);
    while (linklist.length) {
      const current = linklist.shift();
      const left = current.left;
      current.left = current.right;
      current.right = left;
      if (current.left) linklist.push(current.left);
      if (current.right) linklist.push(current.right);
    }

    return this.inOrder();
  }
}

// const bst = new binarySearchTree();
// bst.insertRecursively(3);
// bst.insertRecursively(4);
// bst.insertRecursively(2);
// bst.insertRecursively(1);
// bst.insertRecursively(11);
// bst.insertRecursively(22);
// bst.insertRecursively(0);

// bst.contain(1);

// const bst2 = new binarySearchTree();
// bst2.insertIteratively(3);
// bst2.insertIteratively(4);
// bst2.insertIteratively(2);
// bst2.insertIteratively(1);
// bst2.insertIteratively(11);
// bst2.insertIteratively(22);
// bst2.insertIteratively(0);
