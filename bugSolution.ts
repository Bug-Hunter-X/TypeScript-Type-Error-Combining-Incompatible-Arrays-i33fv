function combineGeneric<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const result = combineGeneric([1, 2, 3], [4, 5, 6]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]

const result2 = combineGeneric(["a", "b", "c"], ["d", "e", "f"]);
console.log(result2); // Output: ["a", "b", "c", "d", "e", "f"]

//Type checking example
function combineWithCheck(arr1: number[], arr2: number[]): number[]{
  if(arr1.some(isNaN) || arr2.some(isNaN)){
    throw new Error("Arrays must contain only numbers");
  }
  return [...arr1,...arr2];
}
const result3 = combineWithCheck([1,2,3],[4,5,6]);
console.log(result3); //Output: [1,2,3,4,5,6]
const result4 = combineWithCheck([1,2,3],[4,5,"a"]);
console.log(result4); //Throws error