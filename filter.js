const filterArray = [1, 2, 3, 4, 5, 6];

const newArray = filterArray.filter((element) => element % 2 != 0);

console.log(newArray); //-> [ 1, 3, 5 ]
