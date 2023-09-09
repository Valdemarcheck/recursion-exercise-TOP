function fibs(n) {
  let a = 0;
  let b = 1;
  let temp = null;
  let array = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    array.push(a + b);
    temp = a;
    a = b;
    b += temp;
  }
  return array;
}

function fibsRec(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const prev = fibsRec(n - 1);
    return [prev, prev[prev.length - 1] + prev[prev.length - 2]].flat();
  }
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const middle = Math.floor(array.length / 2);

    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);

    const leftHalfSorted = mergeSort(leftHalf);
    const rightHalfSorted = mergeSort(rightHalf);

    return sort(leftHalfSorted, rightHalfSorted);
  }
}

function sort(left, right) {
  let sorted = [];
  let hasElementsToSort = true;

  while (true) {
    const leftFirst = left[0];
    const rightFirst = right[0];
    hasElementsToSort = leftFirst != undefined || rightFirst != undefined;
    if (!hasElementsToSort) break;

    if (leftFirst < rightFirst || rightFirst == undefined) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return sorted;
}
