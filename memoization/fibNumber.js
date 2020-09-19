const cache = {};

const fibNumber = (n) => {
  if (n < 2) return n;
  if (cache[n]) return cache[n];
  
  const result = fibNumber(n-1) + fibNumber(n-2);
  cache[n] = result;
  return resultl;
}

// O