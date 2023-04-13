const test = require('../testVariables');

const bubbleSort = (arr) => {
  for (let x=0; x<arr.length; x++) {
    for (let y=0; y<(arr.length - x - 1); y++) {
      //y is subtracting 1 from end of arr every iteration
      // console.log('y', arr[y]);
      // console.log('y+1', arr[y+1]);
      if (arr[y] > arr[y+1]) {
        let temp = arr[y];
        console.log('temp1', temp);
        arr[y] = arr[y + 1];
        console.log('arr[y]line 12', arr[y]);
        arr[y + 1] = temp;
        console.log('arr[y+1] line 15', arr[y+1]);
      }
    };

  };
};

console.log(bubbleSort(test.arr1));