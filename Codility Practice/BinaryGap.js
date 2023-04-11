// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// 1. We need to convert N to Binary before being able to work with it
// 2. Once we get N to binary, we need to split string to work with all characters
function solution(N) {
  if (N.length < 1) {
      return 0;
  };
  
  const binary = N.toString(2);
  const splitBinary = binary.split('');
  const gapCounter = [];
  for (let x=0; x<splitBinary.length; x++) {
      if (splitBinary[x] == 1 && splitBinary[x + 1] == 0) {
          gapCounter.push(splitBinary[x]);
      } else {
          return 0;
      };
      // console.log('splitBinary', splitBinary[x]);
      console.log('gapCounter', gapCounter);
  }
  

}

solution(1041);
solution(15);
solution(32);