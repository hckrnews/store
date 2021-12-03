class SearchResult {
    #items = []
    #totalCount = 0
    #from = 0
    #size = 10

    setItems (items) {
      this.#items = items
    }

    setTotalCount (totalCount) {
      this.#totalCount = totalCount
    }

    setFrom (from) {
      this.#from = from
    }

    setSize (size) {
      this.#size = size
    }

    count () {
      return this.#items.length
    }

    totalCount () {
      return this.#totalCount
    }

    get from () {
      return this.#from
    }

    get page () {
      return this.#from / this.#size
    }

    get size () {
      return this.#size
    }

    get items () {
      return this.#items
    }

    valueOf () {
      return this.#items
    }

    static create ({ items, totalCount, from, size }) {
      const searchResult = new SearchResult()
      searchResult.setItems(items)
      searchResult.setTotalCount(totalCount)
      searchResult.setFrom(from)
      searchResult.setSize(size)

      return searchResult
    }
}

export default SearchResult
