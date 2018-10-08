import { findLastItem } from './findLastItem';

const TESTS = [
  // Simple Array 
  {
    value: [1, 2, 3, 4],
    expected: 4
  },
  // Simple String
  {
    value: 'hello',
    expected: 'o'
  },
  // Simple Object
  {
    value: { a: 1, b: 2, c: 3 },
    expected: { c: 3 }
  },
  // Recursive Array
  {
    value: [1, 2, 3, ['a', 'b', 'c']],
    expected: 'c'
  },
  // Recursive Object
  {
    value: { a: false, b: 'value', c: { a1: 'a', a2: 'b' } },
    expected: { c: { a2: 'b'} }
  }
]

describe('findLastItem', () => {
  it(`[1, 2, 3, 4] ===> 4`, () => {
    expect(findLastItem([1, 2, 3, 4])).toBe(4);
  });

  it('hello ===> o', () => {
    expect(findLastItem('hello')).toBe('o');
  });

  it(`{ a: 1, b: 2, c: 3 } ===> { c: 3 }`, () => {
    expect(findLastItem(test.value)).toEqual(test.expected);
  });

  it(`[1, 2, 3, ['a', 'b', 'c']] ===> 'c'`, () => {
    expect(findLastItem([1, 2, 3, ['a', 'b', 'c']])).toBe('c');
  });

  it(`{ a: false, b: 'value', c: { a1: 'a', a2: 'b' } } ===> { c: { a2: 'b'} }`, () => {
    expect(findLastItem({ a: false, b: 'value', c: { a1: 'a', a2: 'b' } })).toEqual({ c: { a2: 'b'} });
  });
})