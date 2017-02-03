function split(input) {
  if (input.length === 1) {
    return input;
  } else {
    let leftHalf = input.slice(0, Math.floor(input.length / 2));
    let rightHalf = input.slice(Math.floor(input.length / 2));

    return merge(split(leftHalf), split(rightHalf));
  }
}

function merge(leftHalf, rightHalf) {
 let output = [];
 while (leftHalf.length || rightHalf.length) {
   if (leftHalf[0] < rightHalf[0]) {
     output.push(leftHalf.shift());
   } else  if (leftHalf.length < 1) {
     output.push(rightHalf.shift());
   } else if (rightHalf.length < 1) {
     output.push(leftHalf.shift());
   } else {
     output.push(rightHalf.shift());
   }
 }
 return output;
}

module.exports = split;
