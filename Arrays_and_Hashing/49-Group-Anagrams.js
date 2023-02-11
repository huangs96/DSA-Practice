/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// create array to store arrays
 //1. loop over strings
 //2. split strings into array of letters
 //3. compare array of letters with other arrays to confirm anagram
 //4. group together anagram words
 //5. join letters together
 //6. return grouped anagrams
 var groupAnagrams = function(strs) {
  let check = {};

  if (!strs.length) {
      return strs;
  };

  strs.forEach(str => {
      let splitStr = str.split('').sort();
      check[splitStr] ? check[splitStr].push(str) : check[splitStr] = [str];
  });

  const answer = Object.values(check);
  return answer;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));