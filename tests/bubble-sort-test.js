const bubbleSort = require('../scripts/bubble-sort.js');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('bubbleSort tests', () => {

  it('should return an array', ()=> {
    expect(Array.isArray(bubbleSort([]))).to.deep.true;
  });

  it('should sort an array of numeric characters', ()=> {
    assert.deepEqual(bubbleSort([4, 1, 5, 3, 8, 6]), [1, 3, 4, 5, 6, 8]);
  });

  it('should sort an array of alphabet characters', ()=> {
    assert.deepEqual(bubbleSort(['d', 's', 'a', 'j', 'e', 'o']), ['a', 'd', 'e', 'j', 'o', 's']);
  });

  it('should not unsort a sorted array', ()=> {
    assert.deepEqual(bubbleSort([1, 3, 4, 5, 6, 8]), [1, 3, 4, 5, 6, 8]);
  });

  it('should sort an array of 10,000 numbers', ()=> {
    let array = [];
    for (var i = 0; i < 10000; i++) {
      array.push(Math.floor(Math.random() * (100 - 1) + 1));
    }
    let sortedArray = array.sort();
    assert.deepEqual(bubbleSort(array), sortedArray);
  });
});
