const transformObjectValues = (obj, fn) => {
  var transformed = {}
  Object.keys(obj).forEach(key => {
    transformed[key] = fn(obj[key])
  })
  return transformed
}

const bindActionCreator = (actionCreator, name, index) =>
      (...args) => { let add = {}; add[name] = index; return Object.assign(actionCreator(...args), add); }

const bindActionCreatorMap = (creators, name, index) =>
      transformObjectValues(creators, actionCreator => bindActionCreator(actionCreator, name, index))

const bindIndexToActionCreators = (actionCreators, name, index) => {
    return typeof actionCreators === 'function'
        ? bindActionCreator(actionCreators, name, index)
        : bindActionCreatorMap(actionCreators, name, index)
}

export default bindIndexToActionCreators
