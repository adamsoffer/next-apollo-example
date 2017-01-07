import ApolloClient, { createNetworkInterface } from 'apollo-client'

export const initClient = (initialState, isServer) => {
  return new ApolloClient({
    ssrMode: isServer,
    initialState,
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
}
