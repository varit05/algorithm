function findMidIndex(startingIndex, endIndex) {
  const result = (startingIndex + endIndex) / 2;
  return Math.floor(result);
}

function IBinarySearch(data, element) {
  let startingIndex = 0;
  let endIndex = data.length;
  let elementIndex = -1;

  while (startingIndex < endIndex) {
    if (element === data[startingIndex]) {
      elementIndex = startingIndex;
      return elementIndex;
    }
    if (element === data[endIndex]) {
      elementIndex = endIndex;
      return elementIndex;
    }
    // find mid element of the array
    const midIndex = findMidIndex(startingIndex, endIndex);

    if (element === data[midIndex]) {
      elementIndex = midIndex;
      return elementIndex;
    }
    if (element > data[midIndex]) {
      startingIndex = midIndex + 1;
    } else {
      endIndex = midIndex - 1;
    }

    if (startingIndex === endIndex) {
      return elementIndex;
    }
  }
}

const arrayA = [1, 3, 4, 11, 14, 15, 17, 20, 21, 22, 24];

const elementPresentInLoopIndex = IBinarySearch(arrayA, 11);

console.log('elementPresentInLoopIndex', elementPresentInLoopIndex);
