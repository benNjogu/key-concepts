let cache = {};
const memoizedAddTo80 = (n) => {
  if (n in cache) {
    console.log("less time");
    return cache[n];
  } else {
    console.log("long time");
    return (cache[n] = n + 80);
  }
};

console.log(memoizedAddTo80(5));
console.log(cache);
console.log(memoizedAddTo80(5));

const addTo80 = (n) => {
  console.log("long time");
  return n + 80;
};

// console.log(addTo80(5));
// console.log(addTo80(5));
// console.log(addTo80(5));
