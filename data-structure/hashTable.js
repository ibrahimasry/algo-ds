class HashMap {
  constructor(length = 51) {
    this.keys = new Array(length);
  }

  _hash(str) {
    const primeNumber = 31;
    let total = 0;
    const arrLength = this.keys.length;

    for (let i = 0; i < Math.min(str.length, 100); i++) {
      const curr = str.charCodeAt(i) - 97;
      total = (total * primeNumber + curr) % arrLength;
    }

    return total;
  }

  set(key, value) {
    if (this.get(key)) {
      return "already exists";
    }
    const getIndex = this._hash(key);

    if (this.keys[getIndex]) {
      this.keys[getIndex].push([key, value]);
    } else {
      this.keys[getIndex] = [[key, value]];
    }

    return this;
  }

  get(key) {
    const getIndex = this._hash(key);
    if (Array.isArray(this.keys[getIndex])) {
      for (let j = 0; j < this.keys[getIndex].length; j++) {
        if (this.keys[getIndex][j][0] === key) {
          return this.keys[getIndex][j];
        }
      }
    }
    return false;
  }

  getKeys() {
    const values = [];
    const keysLength = this.keys.length;
    for (let i = 0; i < keysLength; i++) {
      if (Array.isArray(this.keys[i])) {
        for (let j = 0; j < this.keys[i].length; j++) {
          values.push(this.keys[i][j][0]);
        }
      }
    }

    return values;
  }

  getValues() {
    const values = [];
    const keysLength = this.keys.length;
    for (let i = 0; i < keysLength; i++) {
      if (Array.isArray(this.keys[i])) {
        for (let j = 0; j < this.keys[i].length; j++) {
          values.push(this.keys[i][j][1]);
        }
      }
    }

    return values;
  }
}

const hashMap = new HashMap();
