const twoSum = function(nums, target) {
  const hash = {}; // Stores seen numbers: {seenNumber: indexItOccurred}

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    //if target - key exists, return value and index
    if (hash[target - n] !== undefined) { 
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
}

console.log(twoSum([1, 2, 3], 5)); // [1, 2]