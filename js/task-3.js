function filterArray(numbers, value) {
  const filteredArr = [];

  for (const item of numbers) {
    if (item > value) {
      filteredArr.push(item);
    }
  }

  return filteredArr;

  // 2nd option
  // return numbers.filter(el => el > value);
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
