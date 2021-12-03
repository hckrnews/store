class SearchResult {
    #items = []
    #totalCount = 0
    #from = 0
    #size = 10
    #options = []

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

    setOptions (options) {
      this.#options = options
    }

    count () {
      return this.#items.length
    }

    totalCount () {
      return this.#totalCount
    }

    valueOf () {
      return this.#items
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

    static create ({ items, totalCount, from, size, options }) {
      const searchResult = new SearchResult()
      searchResult.setItems(items)
      searchResult.setTotalCount(totalCount)
      searchResult.setFrom(from)
      searchResult.setSize(size)
      searchResult.setOptions(options)

      return searchResult
    }
}

export default SearchResult
