import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

export const initStore = (client, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(
      combineReducers({
        apollo: client.reducer()
      }),
      initialState,
      compose(
        applyMiddleware(client.middleware())
      )
    )
  } else {
    if (!window.store) {
      window.store = createStore(
        combineReducers({
          apollo: client.reducer()
        }),
        initialState,
        compose(
          applyMiddleware(client.middleware()),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      )
    }
    return window.store
  }
}
