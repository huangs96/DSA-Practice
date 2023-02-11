/**
 * @param {number[]} nums
 * @return {boolean}
 */

 //1. Loop over array to get values of array
 //2. Set key value pairs in hash table
 //3. If any key value pairs have the same number, return true, otherwise return false
 var containsDuplicate = function(nums) {
  let dict = {};

  for (let x = 0; x<nums.length; x++) {
      if (nums[x] in dict) {
          return true;
      } else {
      dict[nums[x]] = nums[x];
      };
  };
  return false;
};

containsDuplicate([1,2,3,1]);
containsDuplicate([1,2,3,4]);
containsDuplicate([1,1,1,3,3,4,3,2,4,2]);