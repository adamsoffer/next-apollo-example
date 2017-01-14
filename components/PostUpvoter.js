import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

// A mutation is made available on props
function PostUpvoter (props) {
  return (
    <button onClick={() => props.upvote(props.id, props.votes + 1)}>
      Upvote
    </button>
  )
}

const upvotePost = gql`
  mutation updatePost($id: ID!, $votes: Int) {
    updatePost(id: $id, votes: $votes) {
      id
      votes
    }
  }
`

// You can use `graphql` for GraphQL mutations
export default graphql(upvotePost, {
  props: ({ ownProps, mutate }) => ({
    upvote: (id, votes) => mutate({
      variables: { id, votes: votes },
      optimisticResponse: {
        updatePost: {
          id: ownProps.id,
          // Note that we can access the props of the container at `ownProps`
          votes: ownProps.votes + 1
        }
      }
    })
  })
})(PostUpvoter)
