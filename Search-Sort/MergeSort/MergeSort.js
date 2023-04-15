const test = require('../testVariables');

const merge = (left, right) => {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    };
    console.log('arr2 in whileloop', arr);
  };

  return [...arr, ...left, ...right];
};

const mergeSort = (arr) => {
  console.log('arr', arr);
  const half = arr.length / 2;

  //terminate recursion
  if (arr.length < 2) {
    console.log('here', arr);
    return arr;
  };

  const left = arr.splice(0, half);
  console.log('left', left);
  console.log('right', arr);
  console.log('merge', merge(mergeSort(left), mergeSort(arr)));
  return merge(mergeSort(left), mergeSort(arr));
};

console.log(mergeSort(test.arr1));