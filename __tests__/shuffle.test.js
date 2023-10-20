const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('Testing to see if the array returns the same length', () =>{
    const inputArr = ['a', 'b', 'c', 'd']
    const result = shuffle(inputArr)
    expect(result.length).toBe(inputArr.length)
  })
  test('returns an array', () => {
    const inputArr = ['a', 'b', 'c', 'd']
    const result = shuffle(inputArr)
    expect(Array.isArray(result)).toBe(true)
  })
})

