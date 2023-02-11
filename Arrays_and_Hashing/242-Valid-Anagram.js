/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 //1. Loop through s to get letters, but first need to split
 //2. Match s letters with t letters through hashmap
 var isAnagram = function(s, t) {
  let splitStr = s.split('');
  let splitStr2 = t.split('');

  if (splitStr.length !== splitStr2.length) {
      return false;
  };

  for (let x = 0; x<splitStr.length; x++) {
      let position = splitStr2.indexOf(splitStr[x]);
      console.log(position);
      if (position === -1) {
          return false;
      } else {
          splitStr2.splice(position, 1);
      }
  };
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));

