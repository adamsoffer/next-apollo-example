import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

// A mutation is made available on a callback called `mutate`
// Other props of the wrapping component are passed through.
function PostUpvoter ({ mutate, id, votes }) {
  return (
    <button onClick={() => mutate({ variables: { id, votes: ++votes } })}>
      Upvote
    </button>
  )
}

// You can also use `graphql` for GraphQL mutations
export default graphql(gql`
  mutation updatePost($id: ID!, $votes: Int) {
    updatePost(id: $id, votes: $votes) {
      id
      votes
    }
  }
`)(PostUpvoter)
