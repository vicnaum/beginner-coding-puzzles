const assert = require('assert');
const puzzleData = require('./tests/puzzle2.json');

describe('Puzzle 2 - number of words with "a" vowel in them', () => {
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
