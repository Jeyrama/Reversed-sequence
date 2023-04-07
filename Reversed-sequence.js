/*
Build a function that returns an array of integers from n to 1 where n>0.
*/


// Solution

const reverseSeq = n => {
  let arr = [];
    for (let i = n; i > 0; i--) {
      arr.push(i);
    } return arr;
};

// or

const reverseSequence = n => {
  return Array(n).fill(0).map((e, i) => n - i);
}