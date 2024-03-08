// import './style.css';
import './style.scss';
// always using the below restriction as a requirement:
/**
 * if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bound");
}
 */

class HashMap {
  buckets: Array;
  constructor() {
    this.buckets = [];
  }

  hash(key: any) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
}

let hashMap = new HashMap();
console.log(hashMap);
