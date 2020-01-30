import { MultiArrayCombinationIterator } from ".";

describe("MultiArrayCombinationIterator", () => {
  const arrays = [
    [
      [1, 2, 3],
      [4, 5, 6]
    ],
    [
      [1, 2],
      [3, 4],
      [5, 6]
    ],
    [
      [1, 2, 3],
      [4, 5, 6, 7]
    ]
  ];

  describe("getNextElement return first element on first call", () => {
    arrays.forEach(array => {
      it(`with ${JSON.stringify(array)}`, () => {
        const expected = array.map(subarray => subarray[0]);

        const iterator = new MultiArrayCombinationIterator(array);

        expect(iterator.getNextElement()).toEqual(expected);
      });
    });
  });
});
