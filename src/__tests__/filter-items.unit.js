import { expect, describe, it } from '@jest/globals'
import filterItems from '../filter-items.js'

const testCases = [
  {
    description: 'It should just return the array if the match is empty',
    items: [],
    match: {},
    expectedResult: []
  },
  {
    description: 'It should just return the filled array if the match is empty',
    items: [1, 2],
    match: {},
    expectedResult: [1, 2]
  },
  {
    description: 'It should return all items with state 1',
    items: [{
      id: 1,
      state: 1
    },
    {
      id: 2,
      state: 1
    },
    {
      id: 3,
      state: 2
    }],
    match: {
      state: 1
    },
    expectedResult: [{
      id: 1,
      state: 1
    },
    {
      id: 2,
      state: 1
    }]
  },
  {
    description: 'It should return all items with state 2',
    items: [{
      id: 1,
      state: 1
    },
    {
      id: 2,
      state: 1
    },
    {
      id: 3,
      state: 2
    }],
    match: {
      state: 2
    },
    expectedResult: [{
      id: 3,
      state: 2
    }]
  },
  {
    description: 'It should return all items with id 2 and state 1',
    items: [{
      id: 1,
      state: 1
    },
    {
      id: 2,
      state: 1
    },
    {
      id: 3,
      state: 2
    }],
    match: {
      id: 2,
      state: 1
    },
    expectedResult: [{
      id: 2,
      state: 1
    }]
  },
  {
    description: 'It should return all items with id 2 and state 2',
    items: [{
      id: 1,
      state: 1
    },
    {
      id: 2,
      state: 1
    },
    {
      id: 3,
      state: 2
    }],
    match: {
      id: 2,
      state: 2
    },
    expectedResult: []
  },
  {
    description: 'It should return all items with id 2 and 3',
    items: [{
      id: 1,
      state: 1
    },
    {
      id: 2,
      state: 1
    },
    {
      id: 3,
      state: 2
    }],
    match: {
      id: [2, 3]
    },
    expectedResult: [{
      id: 2,
      state: 1
    },
    {
      id: 3,
      state: 2
    }]
  }
]

describe.each(testCases)(
  'Test the item filter method',
  ({ description, items, match, expectedResult }) => {
    it(description, () => {
      const results = filterItems({ items, match })
      expect(results).toEqual(expectedResult)
    })
  }
)
