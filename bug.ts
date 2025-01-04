function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const result = combine([1, 2, 3], [4, 5, 6]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]

const result2 = combine([1, 2, 3], ["a", "b", "c"]);
console.log(result2); // Error: Argument of type 'string[]' is not assignable to parameter of type 'number[]'.