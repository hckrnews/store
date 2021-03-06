import SearchResult from './search-result.js'

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

    search ({ page = 0, size = 10 } = {}) {
      const from = size * page
      const result = this.#items.slice(from, from + size)
      return SearchResult.create({ items: result, totalCount: this.totalCount(), from, size })
    }

    totalCount () {
      return this.#items.length
    }
}

export default Store
export {
  SearchResult
}
