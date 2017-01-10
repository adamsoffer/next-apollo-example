import ApolloClient, { createNetworkInterface } from 'apollo-client'

export const initClient = (initialState, isServer) => {
  const client = new ApolloClient({
    ssrMode: isServer,
    initialState: initialState,
    dataIdFromObject: (result) => {
      if (result.id) {
        return result.id
      }
      return null
    },
    networkInterface: createNetworkInterface({
      uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
      opts: {
        credentials: 'same-origin'
      }
    })
  })
  if (isServer && typeof window === 'undefined') {
    return client
  } else {
    if (!window.__APOLLO_CLIENT__) {
      window.__APOLLO_CLIENT__ = client
    }
    return window.__APOLLO_CLIENT__
  }
}
