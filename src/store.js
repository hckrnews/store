import SearchResult from './search-result.js'
import Search from './models/search.js'
import SortDirection from './enums/sort-direction.js'
import filterItems from './filter-items.js'
import sortItems from './sort-items.js'

class Store {
    #items = []

    addItem (data) {
      this.#items.push(data)
    }

    updateItem (data, key = 'id') {
      this.#items = this.#items.map((item) => {
        if (item[key] === data[key]) {
          return data
        }

        return item
      })
    }

    removeItem (data, key = 'id') {
      this.#items = this.#items.filter((item) => item[key] !== data[key])
    }

    search ({ page = 0, size = 10, filters = {}, sortColumn = 'id', sortDirection = 'asc' } = {}) {
      const search = Search.create({
        page,
        size,
        filters,
        sortColumn,
        sortDirection: SortDirection.create(sortDirection)
      })

      const from = search.size * search.page
      const result = this.#items.slice(from, from + search.size)
      const sortedResult = sortItems({ items: result, searchData: search })
      const filteredItems = filterItems({ items: sortedResult, match: filters })
      const filterOptions = [
        {
          label: 'example',
          value: 'example',
          count: 1
        }
      ]
      return SearchResult.create({
        items: filteredItems,
        totalCount: this.totalCount(),
        from,
        size: search.size,
        options: filterOptions
      })
    }

    totalCount () {
      return this.#items.length
    }
}

export default Store
export {
  SearchResult
}
