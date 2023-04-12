// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  if (A.length < 1) {
    return [];
  };

  while (K > 0) {
    K--;
    const last = A.pop();
    A.unshift(last);
  };

  return A;
};