/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 //1. loop through nums arr
 //2. For everytime index number repeat, add key to obj
 //3. Return top two repeated elements in array form
 
 var topKFrequent = function(nums, k) {
  let obj1 = {};
  let result = [];

  for (let num of nums) {
      if(obj1[num]) {
          obj1[num]++;
      } else {
          obj1[num] = 1;
      };
  };

  let arr = Object.entries(obj1);
  arr.sort((a,b) => {
      return b[1] - a[1];
  });
  // console.log(arr.slice(0, k));
  arr.slice(0,k).forEach(element => {
      result.push(+element[0]);
  });

  return result;
};

console.log(topKFrequent([1,1,1,2,2,3], 2));