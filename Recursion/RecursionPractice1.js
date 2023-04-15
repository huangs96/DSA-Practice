const factorial = (n) => {
  console.log('initial n', n);
  if (n == 1 || n == 0) {
    console.log('basecase met', n);
    return 1;
  } else {
    console.log('base case not met', n)
    console.log('base case not met with next factorial', n - 1);
    return n * factorial(n-1);
  };
};
console.log('factorial', factorial(4));