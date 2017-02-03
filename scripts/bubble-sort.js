function bubbleSort(input) {
  for (let i = 0; i < input.length; i++) {
    for (var j = 1; j < input.length; j++) {
      let next = input[j];
      let current = input[j - 1];
      if (current > next) {
        input[j] = current;
        input[j - 1] = next;
      }
    }
  }
  return input;
}

module.exports = bubbleSort;
