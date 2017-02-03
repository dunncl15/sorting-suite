const split = require('../scripts/merge-sort.js');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('split tests', () => {

  it('should sort an array of numeric characters', ()=> {
    assert.deepEqual(split([4, 1, 5, 3, 8, 6]), [1, 3, 4, 5, 6, 8]);
  });

  it('should sort an array of alphabet characters', ()=> {
    assert.deepEqual(split(['d', 's', 'a', 'j', 'e', 'o']), ['a', 'd', 'e', 'j', 'o', 's']);
  });

  it('should not unsort a sorted array', ()=> {
    assert.deepEqual(split([1, 3, 4, 5, 6, 8]), [1, 3, 4, 5, 6, 8]);
  });

  it('should sort an array of 10,000 numbers', ()=> {
    let array = [];
    for (var i = 0; i < 10000; i++) {
      array.push(Math.floor(Math.random() * (100 - 1) + 1));
    }
    let sortedArray = array.sort((a,b)=>a-b);
    assert.deepEqual(split(array), sortedArray);
  });

});
