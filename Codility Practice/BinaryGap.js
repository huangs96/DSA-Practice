// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// 1. We need to convert N to Binary before being able to work with it
// 2. 
function solution(N) {
  const binary = N.toString(2);
  console.log('binary', binary);
}

solution(1041);
solution(15);
solution(32);