class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1,
      parentIndex,
      parent,
      current;

    while (currentIndex > 0) {
      parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.values[parentIndex] > this.values[currentIndex]) return;

      this.swap(this.values, parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  bubbleDown() {
    let i = 0;
    while (true) {
      const firstChild = 2 * i + 1;
      const secondChild = firstChild + 1;
      if (firstChild > this.values.length - 1) break;
      let maxChild;
      if (
        this.values[firstChild] > this.values[i] &&
        this.values[secondChild] > this.values[i]
      ) {
        this.values[firstChild] > this.values[secondChild]
          ? (maxChild = firstChild)
          : (maxChild = secondChild);
      } else if (this.values[firstChild] > this.values[i])
        maxChild = firstChild;
      else if (this.values[secondChild] > this.values[i])
        maxChild = secondChild;
      else break;

      this.swap(this.values, maxChild, i);

      i = maxChild;
    }
  }

  extractMax() {
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

const maxBinaryHeap = new BinaryHeap();
