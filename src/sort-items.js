import { Arr } from '@hckrnews/arrays'
import Search from './models/search.js'

export default ({ items, searchData }) => {
  const search = Search.create(searchData)

  return new Arr(items).multisort(search.sortColumn, search.sortDirection.key)
}
