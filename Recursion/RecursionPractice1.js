const factorial = (n) => {
  if (n == 1 || n == 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  };
};
console.log('factorial', factorial(10));