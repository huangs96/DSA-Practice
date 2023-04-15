const test = require('../testVariables');

const merge = (left, right) => {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    };
  };

  return [...arr, ...left, ...right];
};

const mergeSort = (arr) => {
  const half = arr.length / 2;

  //terminate recursion
  if (arr.length < 2) {
    return arr;
  };

  const left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
};

console.log(mergeSort(test.arr1));