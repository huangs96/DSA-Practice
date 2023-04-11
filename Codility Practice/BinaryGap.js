// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// 1. We need to convert N to Binary before being able to work with it
// 2. Once we get N to binary, we need to split string to work with all characters
function solution(N) {
  //initiate max gap and current max gap to compare different gaps
  let maxGap = 0;
  let curMaxGap = 0;
  const binary = N.toString(2);
  let endIndex = binary.length-1;
  //if last char of binary is 1, break loop
  for (endIndex; endIndex >= 0; endIndex--) {
      if (binary.charAt(endIndex) != 0) {
          break;
      };
  };
  //loop backwards, if char at end of binary is 0, plus one to current max gap
  for (let i = endIndex - 1; i >= 0; i--) {
      if (binary.charAt(i) == '0') {
          curMaxGap = curMaxGap + 1;
      } else {
        //if one is found, calculate current max gap compared to max gap. This will check and compare separate gaps and always return the largest one
          if (curMaxGap > maxGap) {
              maxGap = curMaxGap;
          }
          curMaxGap = 0
      }
  }
  return maxGap;
}

solution(1041);
solution(15);
solution(32);