const bubbleSort = input => {
  input.forEach(function(value, i){
    let current = input[i];
    let next = input[i + 1];
    if (current > next) {
      [input[i], input[i + 1]] = [input[i + 1], input[i]];
      bubbleSort(input);
    }
  });
  return input;
}

module.exports = bubbleSort;
