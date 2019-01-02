class PriorityQueueNode {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  insert(value, priority) {
    this.values.push(new PriorityQueueNode(value, priority));
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1,
      parentIndex;

    while (currentIndex > 0) {
      parentIndex = Math.floor((currentIndex - 1) / 2);
      if (
        this.values[parentIndex].priority < this.values[currentIndex].priority
      )
        return;

      this.swap(this.values, parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  bubbleDown() {
    let i = 0;
    while (true) {
      const firstChildIndex = 2 * i + 1;
      const secondChildIndex = firstChildIndex + 1;
      if (firstChildIndex > this.values.length - 1) break;
      let maxChild;
      let firstChild = this.values[firstChildIndex];
      let secondChild = this.values[secondChildIndex];
      let element = this.values[i];

      if (
        firstChild.priority < element.priority &&
        secondChild &&
        secondChild.priority < element.priority
      ) {
        firstChild.priority < secondChild.priority
          ? (maxChild = firstChildIndex)
          : (maxChild = secondChildIndex);
      } else if (firstChild.priority < element.priority)
        maxChild = firstChildIndex;
      else if (secondChild && secondChild.priority < element.priority)
        maxChild = secondChildIndex;
      else break;

      this.swap(this.values, maxChild, i);

      i = maxChild;
    }
  }

  extractMin() {
    if (!this.values.length) return false;

    this.swap(this.values, 0, this.values.length - 1);
    const max = this.values.pop();
    this.bubbleDown();
    return max;
  }

  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

const maxPriorityQueue = new PriorityQueue();
