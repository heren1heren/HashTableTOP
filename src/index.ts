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
  MaxLength: number;
  loadFactor: number;
  constructor() {
    this.buckets = [];
    this.loadFactor = 0.7;
    this.MaxLength = 31;
  }
  isPrime(number: number) {
    const size = (size = Math.sqrt(number));
    for (let i = 2; i <= size; i++) {
      //
      if (number % i === 0) return false;
    }
    return true;
  }
  getNextPrime(num: number) {
    let prime = num;
    let found = false;
    while (!found) {
      prime++;
      if (this.isPrime(prime)) {
        found = true;
      }
    }
    return prime;
  }
  hash(key: string): number {
    let hashCode = 0;

    const primeNumber = this.MaxLength;
    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode + key.charCodeAt(i)) % primeNumber;
    }

    return hashCode;
  }
  set(key: string, value: number) {
    /* check to increase array length
     */

    if (this.getLength() >= this.MaxLength * this.loadFactor) {
      this.MaxLength = this.getNextPrime(this.MaxLength);
    }
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.MaxLength) {
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
      hashCode >= this.MaxLength ||
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
    //! I am here
    //returns the number of stored keys in the hash map.
    // using for..loop to increase the count
    // it is tricky because we need to access every bucket to count for keys too.

    let count = 0;

    for (let i = 0; i < this.MaxLength; i++) {
      if (this.buckets[i] !== undefined) {
        count++;
        let currentLinkedList = this.buckets[i].head;
        while (
          currentLinkedList.value !== null &&
          currentLinkedList.key !== null &&
          currentLinkedList.next !== null
        ) {
          count++;
          currentLinkedList = currentLinkedList.next;
        }
      }
    }

    return count;
  }
  clear() {
    //removes all entries in the hash map.
    // clear all the buckets?

    this.buckets = {};
    return this.buckets;
  }
  keys() {
    //loopping

    const arr = [];
    for (let i = 0; i <= this.MaxLength; i++) {
      if (
        this.buckets[i] !== undefined &&
        this.buckets[i].head.value !== null &&
        this.buckets[i].head.key !== null
      ) {
        let currentLinkedList = this.buckets[i].head;
        arr.push(currentLinkedList.key);
        while (
          currentLinkedList.value !== null &&
          currentLinkedList.key !== null &&
          currentLinkedList.next !== null
        ) {
          currentLinkedList = currentLinkedList.next;
          arr.push(currentLinkedList.key);
        }
      }
    }
    console.log(arr);

    return arr;
  }
  values() {
    const arr = [];
    for (let i = 0; i < this.MaxLength; i++) {
      if (
        this.buckets[i] !== undefined &&
        this.buckets[i].head.value !== null &&
        this.buckets[i].head.key !== null
      ) {
        let currentLinkedList = this.buckets[i].head;
        arr.push(currentLinkedList.value);
        while (
          currentLinkedList.value !== null &&
          currentLinkedList.key !== null &&
          currentLinkedList.next !== null
        ) {
          currentLinkedList = currentLinkedList.next;
          arr.push(currentLinkedList.value);
        }
      }
    }
    console.log(arr);

    return arr;
  }
  entries() {
    //returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
    const arr = [];

    for (let i = 0; i < this.MaxLength; i++) {
      if (
        this.buckets[i] !== undefined &&
        this.buckets[i].head.value !== null &&
        this.buckets[i].head.key !== null
      ) {
        let currentLinkedList = this.buckets[i].head;
        const subArr = [];
        subArr.push(currentLinkedList.key);
        subArr.push();
        arr.push([currentLinkedList.key, currentLinkedList.value]);
        while (
          currentLinkedList.value !== null &&
          currentLinkedList.key !== null &&
          currentLinkedList.next !== null
        ) {
          currentLinkedList = currentLinkedList.next;
          const subArr = [];
          subArr.push(currentLinkedList.key);
          subArr.push(currentLinkedList.value);
          arr.push(subArr);
        }
      }
    }
    console.log(arr);

    return arr;
  }
}

const hashMap = new HashMap();
hashMap.set('key1', 1);
hashMap.set('key2', 2);
hashMap.set('key3', 3);
hashMap.set('key4', 4);
hashMap.set('key5', 5);
hashMap.set('key6', 6);
hashMap.set('key7', 7);
hashMap.set('key8', 8);
hashMap.set('key9', 9);
hashMap.set('key10', 10);
hashMap.set('key11', 11);
hashMap.set('key12', 12);
hashMap.set('key13', 13);
hashMap.set('key14', 14);
hashMap.set('key15', 15);
hashMap.set('key16', 16);
hashMap.set('key17', 17);
hashMap.set('key18', 18);
hashMap.set('key19', 19);
hashMap.set('key20', 20);
hashMap.set('key21', 21);
hashMap.set('key22', 22);
hashMap.set('key23', 23);
hashMap.set('key24', 24);
hashMap.set('key25', 25);
hashMap.set('key26', 26);
hashMap.set('key27', 27);
hashMap.set('key28', 28);
hashMap.set('key29', 29);
hashMap.set('key30', 30);
hashMap.set('key31', 31);
hashMap.set('key32', 32);
hashMap.set('key33', 33);
hashMap.set('key34', 34);
hashMap.set('key35', 35);
hashMap.set('key36', 36);
hashMap.set('key37', 37);
hashMap.set('key38', 38);
hashMap.set('key39', 39);
hashMap.set('key40', 40);
hashMap.set('key40', 45);
hashMap.set('key41', 41);
hashMap.set('key42', 42);
hashMap.set('key43', 43);
hashMap.set('key44', 44);
hashMap.set('key45', 45);
hashMap.set('key46', 46);
hashMap.set('key47', 47);
hashMap.set('key48', 48);
hashMap.set('key49', 49);
hashMap.set('key50', 50);
hashMap.set('key51', 51);
hashMap.set('key52', 52);
hashMap.set('key53', 53);
hashMap.set('key54', 54);
hashMap.set('key55', 55);
hashMap.set('key56', 56);
hashMap.set('key57', 57);
hashMap.set('key58', 58);
hashMap.set('key59', 59);
hashMap.set('key60', 60);
hashMap.set('key61', 61);
hashMap.set('key62', 62);
hashMap.set('key63', 63);
hashMap.set('key64', 64);
hashMap.set('key65', 65);
hashMap.set('key66', 66);
hashMap.set('key67', 67);
hashMap.set('key68', 68);
hashMap.set('key69', 69);
hashMap.entries();

console.log(hashMap);

//Extra credits: Create a class HashSet that behaves the same as a HashMap but only contains keys with no values.

class Hashset extends HashMap {
  size: number;

  constructor() {
    super();
    this.size = 0;
    this.loadFactor = 0.75;
  }
}
