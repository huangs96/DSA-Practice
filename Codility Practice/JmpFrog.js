function solution(X, Y, D) {
  if (X === Y) {
      return 0;
  };

  const remainingDistance = Y - X;
  const remainder = remainingDistance / D;
  return Math.ceil(remainder);
};