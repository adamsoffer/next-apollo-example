import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

export const initStore = (client, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(client.reducer(), initialState, applyMiddleware(thunkMiddleware))
  } else {
    if (!window.store) {
      window.store = createStore(client.reducer(), initialState, applyMiddleware(thunkMiddleware))
    }
    return window.store
  }
}
