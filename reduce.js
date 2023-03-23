const myArray = [1, 2, 3, 4, 5];

const sum = myArray.reduce(
  (accumulator, currentElement) => accumulator + currentElement,
  0
);

console.log(sum);

/**
 * use reduce when:
 *  a)you want to end up with one value in the end
 *  b)you want to persist the return of iterating over our elements in each subsequent iterarion
 *
 * The second value of reduce is the initial value of the accumulator
 */
