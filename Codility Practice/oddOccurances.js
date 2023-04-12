// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  if (A.length < 1) {
      return 0;
  };

  const hashmap = {};
  for (let x=0; x<A.length; x++) {
      if (hashmap[A[x]]) {
          hashmap[A[x]] = hashmap[A[x]] + 1;
      } else {
          hashmap[A[x]] = 1;
      };
  };

  const keys = Object.keys(hashmap);
  for (let key of keys) {
      if (hashmap[key] % 2 !== 0) {
          return parseInt(key);
      };
  };
};