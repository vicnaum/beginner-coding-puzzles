const assert = require('assert');
const puzzleData = require('./tests/puzzle1.json');

describe('Puzzle 1 - should return the total amount of money made at the bake sale', () => {
  puzzleData.tests.forEach(test => {
    it(`${test.input.join(", ")} => ${test.output}`, () => {
      assert.equal(puzzle(test.input), test.output);
    });
  });
});

function puzzle(input) {
  // TODO: write code here
  return 0;
}
