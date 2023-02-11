/**
 * @param {string} s
 * @return {boolean}
 */

 //1. we want to remove all non-alphanumeric characters from string
 //2. turn all letters into lowercase
 //3. iterate through string with two pointers, x and y
 //3.5 declare two points within an array, x and y
 //4. if x and y are the same after iterating half of the word, return true
 //5. otherwise, return false

 var isPalindrome = function(s) {
  let cleanUpArr = s.split(' ').join('');
  const getLettersOnly = /[\W_]/g;
  let finalArr = cleanUpArr.replace(getLettersOnly, '').toLowerCase();
  let y = finalArr.length;

  for (let x=0; x<finalArr.length/2; x++) {
      if (finalArr[x] !== finalArr[y - 1 - x]) {
         return false;
      };
  };
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));