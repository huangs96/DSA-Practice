const test = require('../testVariables');

let recursiveBinarySearch = (arr, x, start, end) => {
  //if start index is greater than end index, arr is invalid
  if (start > end) {
    return false;
  };

  let mid = Math.floor((start + end) / 2);
  console.log('mid', mid);
}