import { createStore, applyMiddleware, compose } from 'redux'
import getReducer from './reducer'

export const initStore = (client, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(
      getReducer(client),
      initialState,
      compose(
        applyMiddleware(client.middleware())
      )
    )
  } else {
    if (!window.store) {
      window.store = createStore(
        getReducer(client),
        initialState,
        compose(
          applyMiddleware(client.middleware()),
          // If you are using the devToolsExtension, you can add it here also
          window.devToolsExtension ? window.devToolsExtension() : f => f,
        )
      )
    }
    return window.store
  }
}
