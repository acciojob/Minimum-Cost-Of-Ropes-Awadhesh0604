// function calculateMinCost() {
  //your code here
  
  function connectRopes(arr) {
  // Step 1: Create a min-heap and insert all rope lengths
  const heap = new MinHeap();
  arr.forEach(rope => heap.insert(rope));

  let totalCost = 0;

  // Step 3: Repeat until there is only one rope left
  while (heap.size() > 1) {
    // Step 3a: Extract the two minimum lengths
    const min1 = heap.removeMin();
    const min2 = heap.removeMin();

    // Step 3b: Add the lengths and update totalCost
    const cost = min1 + min2;
    totalCost += cost;

    // Step 3c: Insert the sum back into the min-heap
    heap.insert(cost);
  }

  return totalCost;
}

// MinHeap class
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  removeMin() {
    if (this.size() === 0) {
      throw new Error('Heap is empty');
    }

    const minValue = this.heap[0];
    const lastValue = this.heap.pop();

    if (this.size() > 0) {
      this.heap[0] = lastValue;
      this.bubbleDown(0);
    }

    return minValue;
  }

  bubbleUp(index) {
    const value = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentValue = this.heap[parentIndex];

      if (value >= parentValue) {
        break;
      }

      this.heap[parentIndex] = value;
      this.heap[index] = parentValue;
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    const value = this.heap[index];
    const length = this.size();

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swapIndex = null;

      if (leftChildIndex < length) {
        const leftChildValue = this.heap[leftChildIndex];
        if (leftChildValue < value) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        const rightChildValue = this.heap[rightChildIndex];
        if (
          (swapIndex === null && rightChildValue < value) ||
          (swapIndex !== null && rightChildValue < this.heap[swapIndex])
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) {
        break;
      }

      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = value;
      index = swapIndex;
    }
  }
}
  
  
  
 
