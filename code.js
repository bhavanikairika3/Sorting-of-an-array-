function sortDescending(arr) 
{
  return arr.sort((a, b) => b - a);
}
const numbers = [5, 2, 9, 1, 3, 6];
const descendingSorted = sortDescending(numbers);
console.log(descendingSorted);
