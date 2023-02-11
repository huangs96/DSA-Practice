/**
 * @param {string} s
 * @return {boolean}
 */

 //1. create hashmap with opening bracket as key, closing bracket as value
 //2. iterate over string, if key is true, push value into array
 //3. else pop value, if popped value does not equal value of key, return false (it is out of order)
 //4. return array.length === 0
 var isValid = function(s) {
  let hash = {
      '(':')',
      '{':'}',
      '[':']'
  };

  let checker = [];

   for (let x=0; x<s.length; x++) {
       if (hash.hasOwnProperty(s[x])) {
           checker.push(s[x]);
       } else {
           const pop = checker.pop();
           if (s[x] !== hash[pop]) {
               return false;
           };
       };
   };

   return checker.length === 0;

};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));