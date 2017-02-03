// const insertionSort = input => {
//   for (var i=0; i < input.length; i++){
//     let current = input[i];
//     let next = input[i + 1];
//     if (current > next) {
//       [input[i], input[i + 1]] = [input[i + 1], input[i]];
//       insertionSort(input);
//     }
//   };
//   return input;
// }

const insertionSort = input => {
  for (var i=0; i < input.length; i++){
    let current = input[i];
    let next = input[i + 1];
    if (current > next) {
      [input[i + 1], input[i]] = [input[i], input[i + 1]];
      insertionSort(input);
    }
  };
  return input;
}

module.exports = insertionSort;
