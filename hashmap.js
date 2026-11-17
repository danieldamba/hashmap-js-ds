export class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  set(key, value) {
    const index = this.hash(key) % this.capacity;
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);

    if (this.size() / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }


    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return undefined;
  }

  delete(key) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }


    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }

    return false;
  }

  size() {
    let count = 0;
    for (const bucket of this.buckets) {
      count += bucket.length;
    }
    return count;
  }

  length() {
    return this.size();
  }

  entries() {
    const allEntries = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        allEntries.push(entry);
      }
    }
    return allEntries;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = 31 * hash + key.charCodeAt(i);
    }
    return hash;
  }

  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);

    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }
}

export class HashSet {
  constructor() {
    this.map = new HashMap();
  }

  add(value) {
    this.map.set(value, true);
  }

  has(value) {
    return this.map.get(value) !== undefined;
  }

  delete(value) {
    return this.map.delete(value);
  }

  size() {
    return this.map.size();
  }

  length() {
    return this.size();
  }

  keys() {
    return this.map.entries().map(([key]) => key);
  }
}