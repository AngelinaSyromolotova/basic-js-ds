const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor() {
      this.list = [];
  }

  getUnderlyingList() {
      let linkedListStart = { value: null, next: null };
      let linkedList = linkedListStart;

      for (let i = 0; i < this.list.length; i++) {
          linkedList.value = this.list[i];
          if (i + 1 < this.list.length) {
              linkedList.next = { value: null, next: null };
              linkedList = linkedList.next;
          }
      }

      return linkedListStart;
  }

  enqueue(value) {
      this.list.push(value);
  }

  dequeue() {
      return this.list.shift();
  }
}

module.exports = {
  Queue
};
