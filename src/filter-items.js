import Obj from '@hckrnews/objects'

export default ({ items, match }) => items.filter(item => Object.entries(match).every(([key, value]) => {
  const itemObject = Obj().create(item)
  const itemValue = itemObject.getByKey(key)

  if (Array.isArray(value)) {
    return value.includes(itemValue)
  }

  return (value.constructor === String && itemValue.constructor === String)
    ? itemValue.localeCompare(value, 'en', { usage: 'search', sensitivity: 'base' }) === 0
    : itemValue === value
}))
