import { expect, describe, it } from '@jest/globals'
import Store from '../store.js'

const testStore = Store.create()

describe('Test the store', () => {
  it('It should add an item to the store', () => {
    testStore.addItem({ id: 42, value: 1 })
    const result = testStore.search()
    expect(result.valueOf()).toEqual([{ id: 42, value: 1 }])
    expect(result.count()).toEqual(1)
    expect(result.totalCount()).toEqual(1)
    expect(result.from).toEqual(0)
    expect(result.size).toEqual(10)
  })

  it('It should add another item to the store', () => {
    testStore.addItem({ id: 43, value: 2 })
    const result = testStore.search({ from: 0, size: 10 })
    expect(result.valueOf()).toEqual([{ id: 42, value: 1 }, { id: 43, value: 2 }])
    expect(result.count()).toEqual(2)
    expect(result.totalCount()).toEqual(2)
  })

  it('It should get the first page with items with a limit of 1 per page', () => {
    const result = testStore.search({ from: 0, size: 1 })
    expect(result.valueOf()).toEqual([{ id: 42, value: 1 }])
    expect(result.count()).toEqual(1)
    expect(result.totalCount()).toEqual(2)
    expect(result.from).toEqual(0)
    expect(result.size).toEqual(1)
  })

  it('It should get the second page with items with a limit of 1 per page', () => {
    const result = testStore.search({ from: 1, size: 1 })
    expect(result.valueOf()).toEqual([{ id: 43, value: 2 }])
    expect(result.count()).toEqual(1)
    expect(result.totalCount()).toEqual(2)
    expect(result.from).toEqual(1)
    expect(result.size).toEqual(1)
  })

  it('It should update the item with id 43', () => {
    testStore.updateItem({ id: 43, value: 3 })
    const result = testStore.search({ from: 0, size: 10 })
    expect(result.valueOf()).toEqual([{ id: 42, value: 1 }, { id: 43, value: 3 }])
    expect(result.count()).toEqual(2)
    expect(result.totalCount()).toEqual(2)
  })

  it('It should remove item with id 43', () => {
    testStore.removeItem({ id: 43, value: 3 })
    const result = testStore.search({ from: 0, size: 10 })
    expect(result.valueOf()).toEqual([{ id: 42, value: 1 }])
    expect(result.count()).toEqual(1)
    expect(result.totalCount()).toEqual(1)
  })
})
