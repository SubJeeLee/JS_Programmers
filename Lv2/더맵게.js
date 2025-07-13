class MinHeap {
  constructor() {
    this.heap = [];
  }
    
  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop(); // 마지막 노드를 루트로 이동
    this.heapifyDown(0);
    return minValue;
  }
    
  heapifyDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallestIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      this.swap(index, smallestIndex);
      this.heapifyDown(smallestIndex);
    }
  }
    
  peek() {
      return this.heap[0];
  }
}

function solution(scoville, K) {
  let mixCount = 0;
  const minHeap = new MinHeap();

  for (const s of scoville) {
    minHeap.push(s);
  }

  while (minHeap.peek() < K && minHeap.size() >= 2) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const newScoville = first + second * 2;
    minHeap.push(newScoville);
    mixCount++;
  }

  return minHeap.peek() >= K ? mixCount : -1;
}

//어려웠으니 다시 풀어보기 권장
// 입출력 예
// scoville	K	return
// [1, 2, 3, 9, 10, 12]	7	2
