const arr = [77,31,28,21,14,41,15,18,49,10];

const selectionSort = (arr) => {
  //initiate first index number as smallest number
  for (let x=0; x<arr.length; x++) {
    let minimum = x;
    //second loop to compare elements next to arr[x]
    for (let y=x+1; y<arr.length; y++) {
      if (arr[y] < arr[minimum]) {
        minimum = y;
        //minimum index is now acheived through first iteration
      };
    };

    if (minimum !== x) {
      [arr[x], arr[minimum]] = [arr[minimum], arr[x]];
      console.log('swap check', arr)
    }
  };
  console.log('swap check22222', arr);
};

console.log(selectionSort(arr));