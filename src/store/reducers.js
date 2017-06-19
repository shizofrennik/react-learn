import { combineReducers } from 'redux'
import locationReducer from './location'
import modalReducer from './modal'
import columnsReducer from './columns'
import cardReducer from './cards'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    modal: modalReducer,
    columns: columnsReducer,
    cards: cardReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
