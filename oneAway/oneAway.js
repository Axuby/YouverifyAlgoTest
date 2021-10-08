const areOneAway = (left, right) => {
  if (Math.abs(left.length - right.length) > 1) return false;
  let difference = 0;
  let indexLeft = 0;
  let indexRight = 0;
  while (difference < 2 && indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] !== right[indexRight]) {
      difference++;
      // Character inserted in left string, or character removed in right string
      if (left[indexLeft + 1] === right[indexRight]) indexLeft++;
      // Character inserted in right string, or character removed in left string
      else if (left[indexLeft] === right[indexRight + 1]) indexRight++;
    }
    indexLeft++;
    indexRight++;
  }
  return difference < 2;
};
