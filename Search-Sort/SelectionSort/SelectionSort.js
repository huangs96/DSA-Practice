const arr = [77,31,28,21,14,41,15,18,49,10];

const selectionSort = (arr) => {
  //initiate first index number as smallest number
  for (let x=0; x<arr.length; x++) {
    //x starts at 0
    let minimum = x;
    //second loop to compare elements next to arr[x]
    for (let y=x+1; y<arr.length; y++) {
      //y starts at 1
      if (arr[y] < arr[minimum]) {
        console.log('y', [arr[y]]);
        console.log('min', [arr[minimum]]);
        //if arr[y] is less than minimum, y index becomes the new minimum index. From there, the next iteration will be minimum + 1 to check if the element next to it is greater or smaller
        minimum = y;
      };
    };

    if (minimum !== x) {
      //if minimum index has changed, the two elements will be swapped because the initial minimum is no longer the smallest element between the two
      [arr[x], arr[minimum]] = [arr[minimum], arr[x]];
    }
  };
  
  return arr;
};

console.log(selectionSort(arr));