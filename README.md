# TypeScript Type Error Combining Incompatible Arrays

This example demonstrates a common type error in TypeScript when attempting to combine arrays of different types using the spread syntax.  The function `combine` is designed to take two number arrays as input, but the second call to `combine` passes a string array, causing a type error.

## How to Reproduce

1.  Save the code in `bug.ts`.
2.  Compile the code using a TypeScript compiler: `tsc bug.ts`
3.  Observe the type error in the compiler output.

## Solution

The solution involves either type checking or creating a generic function.