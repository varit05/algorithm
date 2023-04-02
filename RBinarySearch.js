// This uses recursive function instead of while condition

function findMidIndex(startingIndex, endIndex) {
  const result = (startingIndex + endIndex) / 2;
  return Math.floor(result);
}

function RBinarySearch(data, startingIndex, endIndex, element) {
  if (element === data[startingIndex]) {
    return startingIndex;
  }
  if (element === data[endIndex]) {
    return endIndex;
  }
  // find mid element of the array
  const midIndex = findMidIndex(startingIndex, endIndex);

  if (element === data[midIndex]) {
    return midIndex;
  }
  if (startingIndex === endIndex) {
    return elementIndex;
  }
  console.log(midIndex);
  if (element > data[midIndex]) {
    return RBinarySearch(data, midIndex + 1, endIndex, element);
  } else {
    return RBinarySearch(data, startingIndex, midIndex - 1, element);
  }
}

const arrayA = [1, 3, 4, 11, 14, 15, 17, 20, 21, 22, 24];

const elementPresentInLoopIndex = RBinarySearch(arrayA, 0, arrayA.length, 11);

console.log('elementPresentInLoopIndex', elementPresentInLoopIndex);

document.createElement('span');

span.textValue = elementPresentInLoopIndex;
