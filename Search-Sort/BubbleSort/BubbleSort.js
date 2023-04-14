const test = require('../testVariables');

const bubbleSort = (arr) => {
  for (let x=0; x<arr.length; x++) {
    //here we do arr.length - x - 1 because we don't want to go over the sorted elements of the array already. E.G., if we have already sorted arr[0], we can take that off the array for sorting and iterating
    for (let y=0; y<(arr.length - x - 1); y++) {
      //y is subtracting 1 from end of arr every iteration
      // if arr[y] is greater than the index next to it, bubble up arr[y] 
      if (arr[y] > arr[y+1]) {
        console.log('arry', arr[y]);
        //storing first arr[y] as temp
        let temp = arr[y];
        //changing arr[y] to arr[y+1]
        arr[y] = arr[y + 1];
        //using stored value in temp to change arr[y+1] to previous value of arr[y]
        arr[y + 1] = temp;
        // console.log('arr[y+1] line 15', arr[y+1]);
      }
    };
    console.log('arr1', test.arr1);
  };
  console.log('arr2', test.arr1);
  return test.arr1;
};

console.log(bubbleSort(test.arr1));