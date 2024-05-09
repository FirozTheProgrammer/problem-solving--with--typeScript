function findLargestNumber(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Array is empty");
  }

  let largestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

