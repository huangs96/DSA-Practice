const test = require('../testVariables');

let recursiveBinarySearch = (arr, x, start, end) => {
  //if start index is greater than end index, arr is invalid
  if (start > end) {
    return false;
  };

  let mid = Math.floor((start + end) / 2);
  console.log('mid', mid);

  //if midpoint of arr is X, return true
  if (arr[mid] === x) {
    return `index ${mid} is the element ${arr[mid]}`;
  };

  //if midpoint is greater than x, we know that x is between 0 and midpoint. We want to do recursive search with start as beginning of array and end as midpoint-1
  if (arr[mid] > x) {
    return recursiveBinarySearch(arr, x, start, mid-1);
    //else if mid point is less than x, we know that x is between midpoint and end. Recursively search arr with mid+1 as starting point and last index of arr being end.
  } else {
    return recursiveBinarySearch(arr, x, mid+1, end);
  };

};

// console.log(recursiveBinarySearch(test.sortedArr, 5, 0, test.sortedArr.length-1));

class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}

let sortedArrToBST = (arr, start, end) => {
  if (start > end) {
    return null;
  };

  let mid = parseInt((start + end) / 2);
  let node = new Node(arr[mid]);
  
  node.left = sortedArrToBST(arr, start, mid - 1);
  node.right = sortedArrToBST(arr, mid + 1, end);
  return node;
  
};

// console.log('sortedArrToBST', sortedArrToBST(test.sortedArr, 0, test.sortedArr.length-1));

let preOrder = (node) => {

  //base case
  if (node == null) {
    return;
  };

  console.log(node.data)
  console.log(node.left)
  console.log(node.right);
  preOrder(node.left);
  preOrder(node.right);

};

let exampleBST = sortedArrToBST(test.sortedArr, 0, test.sortedArr.length-1);


console.log(preOrder(exampleBST));

