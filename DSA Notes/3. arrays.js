// -------------------------------------------------------------------------------
// II.Arrays:
// -------------------------------------------------------------------------------

const stringArr = ["a", "b", "c", "d", "e"];
const numArr = [1, 2, 3, 4, 5];
const boolArr = [true, false];
const mixedArr = ["a", 2, true, undefined, null, { a: "a" }, ["b"]];
console.log(mixedArr);

// Custom Array data structure:-------------
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // Add to end
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // Get element by index
  get(index) {
    return this.data[index];
  }

  // Remove from end
  pop() {
    if (this.length === 0) return undefined;
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // Remove from start
  shift() {
    if (this.length === 0) return undefined;
    const firstItem = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  // Add to start
  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return this.length;
  }

  // Delete by index
  deleteByIndex(index) {
    if (index < 0 || index >= this.length) return undefined;
    const item = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  // Insert at specific index
  insertAt(index, value) {
    if (index < 0 || index > this.length) return false;
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = value;
    this.length++;
    return true;
  }

  // Find index of an item
  indexOf(item) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) return i;
    }
    return -1;
  }

  // Check if item exists
  includes(item) {
    return this.indexOf(item) !== -1;
  }

  // Reverse the array
  reverse() {
    const mid = Math.floor(this.length / 2);
    for (let i = 0; i < mid; i++) {
      const oppositeIndex = this.length - 1 - i;
      const temp = this.data[i];
      this.data[i] = this.data[oppositeIndex];
      this.data[oppositeIndex] = temp;
    }
    return this;
  }

  // Map — return new MyArray
  map(callback) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this.data[i], i, this));
    }
    return result;
  }

  // Filter — return new MyArray
  filter(callback) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i, this)) {
        result.push(this.data[i]);
      }
    }
    return result;
  }

  // ForEach — just iterate
  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i], i, this);
    }
  }

  // Join elements into a string
  join(separator = ",") {
    let str = "";
    for (let i = 0; i < this.length; i++) {
      str += this.data[i];
      if (i < this.length - 1) str += separator;
    }
    return str;
  }

  // Slice — returns new MyArray
  slice(start = 0, end = this.length) {
    const result = new MyArray();
    for (let i = start; i < end && i < this.length; i++) {
      result.push(this.data[i]);
    }
    return result;
  }

  // Concat — merge with another MyArray
  concat(otherArray) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) result.push(this.data[i]);
    for (let i = 0; i < otherArray.length; i++) result.push(otherArray.data[i]);
    return result;
  }

  // Clear all data
  clear() {
    this.data = {};
    this.length = 0;
  }
}

const myNewArray = new MyArray();
myNewArray.push("a");
myNewArray.push("b");
myNewArray.push("c");
console.log(myNewArray);
console.log(myNewArray.deleteByIndex(0));
console.log(myNewArray);

// 1) Reverse String:-------------
let text = "hello";
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString(text));

// 2) Palindrome:-------------
const isPalindrome = (str) => str.split("").reverse().join("") === str;
console.log(isPalindrome("abba"));

// 3) Int reversal:-------------
const reverseInt = (str) =>
  parseInt(str.toString().split("").reverse().join("")) * Math.sign(str);
console.log(reverseInt(-123));

// 4) Sentence Capitalization:-------------
const capitalize = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log(capitalize("saNthosh sivakumar"));

// 5) FizzBuzz:-------------
const fizzBuzzFunction = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
};
fizzBuzzFunction(15);

// 6) Chunk Array:-------------
const chunkArray = (array, size) => {
  let chunked = [];
  let index = 0;
  while (index < array.length) {
    let chunk = array.slice(index, index + size);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
};
console.log(chunkArray([1, 2, 4, 5, 9.5, 6, 4.7, 0], 7));

// 7) Factorial Array:-------------
function factorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) res *= i;
  return res;
}
console.log(factorial(5));

// 8) Two Sum:-------------
// solution 1)
function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
}
// solution 2)
function twoSum(array, target) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    const sum = target - array[i];
    if (map.get(sum)) {
      return [i, map.get(sum)];
    }
    map.set(array[i], i);
  }
}
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19));
