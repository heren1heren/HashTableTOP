class Node {
  value: number;
  next: object;
  key: string;
  constructor(value: number, key: string) {
    this.value = value;
    this.key = key;
    this.next = null;
  }

  getNext() {
    return this.next;
  }
}
export default class LinkedList {
  value: number;
  size: number;

  head: any;

  tail: any;
  constructor(value: number, key: string) {
    this.head = { value: value, key: key, next: null };
    this.tail = this.head;
    this.size = 1;
  }

  append(value: number, key: string) {
    if (this.size === 0) {
      this.head = { value: value, key: key, next: null };
      this.tail = this.head;
      return;
    }
    const node = new Node(value, key);

    this.tail = node;

    let current = this.head;

    if (current.next !== null) {
      while (current.next !== null) {
        current = current.next;
      }
    }
    current.next = node;
    this.size++;
  }

  prepend(value: number) {
    const node = new Node(value);
    const headCopy = this.head;
    this.head = node;
    this.head.next = headCopy;
    this.size++;
  }
  getSize() {
    return this.size;
  }
  getHead() {
    // returns the first node in the list
    return this.head;
  }
  getTail() {
    return this.tail;
    // returns the last node in the list
  }
  at(index: number) {
    if (index < 0 || index > this.size - 1) {
      console.log(index);

      console.log('ohhh nooonelll');
      return;
    }
    let copy = this.head;
    for (let i = 0; i < index; i++) {
      copy = copy.next;
    }
    return copy;
  }
  modifiesASpecificNode(index: number, value: number) {
    // return a copy
    // const index = this.find(value);

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.value = value;
  }
  pop() {
    //how to remove the last element from the list???
    //first I do this.tail = last tail;  and this.tail.next = null;

    /* don't know how to do this.tail = previous tail
    assumptions:
    1. transverse head -> delete last element contains next:null
       don't know how to delete last element contains next:null
     -> 1.1 create a ..... 
             try while(current.next !== null) to transverse the linked list
            -> 1.1.1 don't know how to ....
        1.2 
     -> this.tail = this.at(size-2)

     2. another way except (1.)
     3. another way of another way...
     */
    if (this.size === 1) {
      this.head = null;
      this.size = 0;
      this.tail = null;
      return;
    }
    this.tail = this.at(this.size - 2);

    this.tail.next = null;
    this.size--;
  }

  contains(value: number, key: string) {
    //returns true if the passed in value is in the list
    // and otherwise returns false.
    /* my ways: 
    transversing this.head -> check if(value === this.value). 
    Repeat until this.head.next === null
    by using while loop
    */
    let current = this.head;

    //
    while (current.next !== null) {
      if (value === current.value) {
        // not skipping the first this.head.value
        return true;
      }
      current = current.next;
      if (value === current.value) {
        return true;
      }
    }

    return false;
  }
  findByKey(key: string) {
    let current = this.head;
    const maxIndex = this.size - 1;
    for (let i = 0; i <= maxIndex; i++) {
      if (key === current.key) {
        return i;
      }
      current = current.next;
    }
    return null;
  }
  find(value: number) {
    //returns the index of the node containing value,
    //or null if not found.

    /* assumptions:
    using for loop to transverse and using 'i' in the for..loop .
    to track  'current index' = 'current i'
    so if (value === current.value) {
      return true
    } 


    return false

    */

    let current = this.head;
    const maxIndex = this.size - 1;
    for (let i = 0; i <= maxIndex; i++) {
      if (value === current.value) {
        return i;
      }
      current = current.next;
    }
    return null;
  }
  toString() {
    /*represents your LinkedList objects as strings,
     so you can print them out and preview them in the console. 
    The format should be: ( value ) -> ( value ) -> ( value ) -> null
     */
    //using `` backtick to do so
    let totalStr = '';
    let current = this.head;
    while (current.next !== null) {
      totalStr += `(${current.value}) -> `;
      current = current.next;
    }
    totalStr += null;
    return totalStr;
  }
  /*Extra Credit Tip: When you insert or remove a node,
   consider how it will affect the existing nodes. 
  Some of the nodes will need their nextNode link updated.
  */

  insertAt(value: number | string, index: number) {
    if (index < 0 || index > size - 1) {
      console.log('ohhh nooohell');
      return;
    }
    const newNode = new Node(value);
    if (index === 0) {
      this.prepend(value);
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next; // copying current.next inside newNode.next
      current.next = newNode;
      this.size++;
    }
  }
  removeAt(index: number) {
    if (index < 0) {
      console.log('ohhh noo');
      return;
    }
    if (this.size === 1) {
      this.pop();
      return;
    }
    let current = this.head;

    for (let i = 1; i < index; i++) {
      current = current.next;
    }

    const copy = current.next.next;

    current.next = copy;

    this.size--;
  }
}
