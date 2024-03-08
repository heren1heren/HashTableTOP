// import './style.css';
import './style.scss';
import LinkedList from './LinkedList';
import LinkedList from './LinkedList';
// always using the below restriction as a requirement:
/**
 * if (hashCode < 0 || hashCode >= this.length) {
      console.log(hashCode);
      return;
    }
 */

class HashMap {
  buckets: Array;
  length: number;
  loadFactor: number;
  constructor() {
    this.buckets = [];
    this.loadFactor = 0.75;
    this.length = 31;
  }

  hash(key: string): number {
    let hashCode = 0;

    const primeNumber = this.length;
    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode + key.charCodeAt(i)) % primeNumber;
    }

    return hashCode;
  }
  set(key: string, value: number) {
    /* 

set(key, value) takes two arguments. the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten or we can say that we update the key’s value (e.g. Carlos is our key but it is called twice: once with value I am the old value., and once with value I am the new value.. From the logic stated above, Carlos should contain only the latter value).

In the meantime, a collision is when TWO DIFFERENT keys sit inside the same bucket, because they generate the same hash code (e.g. Carlos and Carla are both hashed to 3, so 3 becomes a location for Carlos AND Carla. However, we know that it is the collision. It means we should find a way how to resolve it — how to deal with collisions, which was mentioned in the previous lesson).

    Remember to grow your buckets size when it needs to, by calculating if your bucket has reached the load factor. Some of the methods in this assignment that are mentioned later could be reused to help you handle that growth logic more easily. So you may want to hold onto implementing your growing functionality just for now. However, the reason why we mention it with set() is because it’s important to grow buckets exactly when they are being expanded.


     */

    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.length) {
      console.log(hashCode);
      return;
    }

    if (this.buckets[hashCode] === undefined) {
      const linkedList = new LinkedList(value, key);
      this.buckets[hashCode] = linkedList;
    } else if (this.buckets[hashCode].findByKey(key) !== null) {
      this.buckets[hashCode].modifiesASpecificNode(
        this.buckets[hashCode].findByKey(key),
        value
      );
    } else {
      this.buckets[hashCode].append(value, key);
    }
  }

  get(key: string) {
    const hashCode = this.hash(key);
    if (
      this.buckets[hashCode] !== undefined &&
      this.buckets[hashCode].findByKey(key) !== null
    ) {
      const index = this.buckets[hashCode].findByKey(key);
      const currentNode = this.buckets[hashCode].at(index);
      return currentNode.value;
    }
    return null;
    //returns the value that is assigned to this key.
    //If a key is not found, return null.
  }
  has(key: string) {
    const hashCode = this.hash(key);
    if (
      this.buckets[hashCode] !== undefined &&
      this.buckets[hashCode].findByKey(key) !== null
    ) {
      return true;
    }
    return false;
  }
  remove(key: string) {
    //takes a key as an argument.
    //If the given key is in the hash map, it should remove the entry with that key and return 'okay babe, I removed it'.
    // If the key isn’t in the hash map, it should return 'I can't not find it ,babe'
    const hashCode = this.hash(key);
    if (
      hashCode < 0 ||
      hashCode >= this.length ||
      this.buckets[hashCode] === undefined
    ) {
      console.log("i can't not find it, baby");
      console.log(hashCode);

      return;
    }
    console.log(this);

    console.log(hashCode);
    const indexOfLinkedList = this.buckets[hashCode].findByKey(key); // this is a linkedlist
    console.log(indexOfLinkedList);

    this.buckets[hashCode].removeAt(indexOfLinkedList);
    return;
  }
  getLength() {
    //returns the number of stored keys in the hash map.
    // using for..loop to increase the count 
    // it is tricky because we need to access every bucket to count for keys too.

    let count = 0;

    for(let i = 0; i <= this.length; i++) {
        if(this.buckets[i])
    }
  }
  clear() {
    //removes all entries in the hash map.
  }
  keys() {
    //returns an array containing all the keys inside the hash map.
  }
  values() {
    //returns an array containing all the values.
  }
  entries() {
    //returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
  }
}

const hashMap = new HashMap();
hashMap.set('hwx', 22);
hashMap.set('Idonthinkyouhaveme', 111);
hashMap.remove('hwx');
hashMap.set('hwx', 22);

console.log(hashMap);
console.log(hashMap.buckets[3]);

//Extra credits: Create a class HashSet that behaves the same as a HashMap but only contains keys with no values.

class Hashset extends HashMap {
  size: number;

  constructor() {
    super();
    this.size = 0;
    this.loadFactor = 0.75;
  }
}
