import { ApolloProvider, getDataFromTree } from 'react-apollo'
import React from 'react'
import 'isomorphic-fetch'
import { initClient } from './initClient'
import { initStore } from './initStore'

export default (Component) => (
  class extends React.Component {
    static async getInitialProps (ctx) {
      const isServer = !!ctx.req
      const client = initClient(null, isServer)
      const store = initStore(client, client.initialState, isServer)

      const app = (
        <ApolloProvider client={client} store={store}>
          <Component url={{ query: ctx.query }} />
        </ApolloProvider>
      )

      await getDataFromTree(app)

      const data = client.store ? client.store.getState()[client.reduxRootKey].data : null
      const initialState = {
        [client.reduxRootKey]: {
          data
        }
      }

      return {
        initialState,
        isServer
      }
    }

    constructor (props) {
      super(props)
      this.client = initClient(this.props.initialState, this.props.isServer)
      this.store = initStore(this.client, this.props.initialState, this.props.isServer)
    }

    render () {
      return (
        <ApolloProvider client={this.client} store={this.store}>
          <Component url={this.props.url} />
        </ApolloProvider>
      )
    }
  }
)
