import { Arr } from '@hckrnews/arrays'
import SearchResult from './search-result.js'
import Search from './models/search.js'
import SortDirection from './enums/sort-direction.js'

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
      const sortedResult = new Arr(result).multisort(search.sortColumn, search.sortDirection.key)
      return SearchResult.create({ items: sortedResult, totalCount: this.totalCount(), from, size: search.size })
    }

    totalCount () {
      return this.#items.length
    }
}

export default Store
export {
  SearchResult
}
