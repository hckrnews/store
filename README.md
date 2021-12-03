# Create store search results

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Scrutinizer Code Quality][scrutinizer-image]][scrutinizer-url]

## Installation

`npm install @hckrnews/store`
or
`yarn add @hckrnews/store`

## Test the package

`npm run test`
or
`yarn test`

## Usage

```javascript
import Store from '../store.js'

const testStore = Store.create()

testStore.addItem({ id: 42, value: 1 })
testStore.addItem({ id: 43, value: 2 })
testStore.updateItem({ id: 42, value: 3 }, 'id')
testStore.removeItem({ id: 42 }, 'id')

const result = testStore.search({ page: 0, size: 10 })

testStore.totalCount() // 1

result.count() // 1 
result.totalCount() // 1 
result.valueOf() // [{ id: 43, value: 2 }]
result.items // [{ id: 43, value: 2 }]
result.from // 0
result.size // 10
result.page // 0
```

[npm-url]: https://www.npmjs.com/package/@hckrnews/store
[npm-image]: https://img.shields.io/npm/v/@hckrnews/store.svg
[travis-url]: https://sonarcloud.io/summary/new_code?id=hckrnews_store
[travis-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_store&metric=alert_status
[coveralls-url]: https://sonarcloud.io/component_measures?id=hckrnews_store&metric=new_coverage&view=list
[coveralls-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_store&metric=coverage
[scrutinizer-url]: https://scrutinizer-ci.com/g/hckrnews/store/?branch=main
[scrutinizer-image]: https://scrutinizer-ci.com/g/hckrnews/store/badges/quality-score.png?b=main
