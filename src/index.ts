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

    for (let i = 0; i <= this.MaxLength; i++) {
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
console.log(hashMap.MaxLength);

console.log(hashMap.getLength());
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
