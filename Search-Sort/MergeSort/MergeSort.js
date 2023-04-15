const test = require('../testVariables');
const test2 = [6,4,2,3,1,5];

const merge = (left, right) => {
  let arr = [];

  while (left.length && right.length) {
    console.log('left in while', left)
    console.log('right in while', right)
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    };
    console.log('arr in while', arr);
  };
  console.log('arr22222', arr)
  console.log('left22222', left)
  console.log('right22222', right)
  return [...arr, ...left, ...right];
};

const mergeSort = (arr) => {
  console.log('initial arr', arr);
  const half = arr.length / 2;

  //terminate recursion
  if (arr.length < 2) {
    console.log('base case met', arr);
    return arr;
  };

  const left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(arr));
};

console.log(mergeSort(test2));