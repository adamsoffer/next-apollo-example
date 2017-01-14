import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import PostUpvoter from './PostUpvoter'

// The data prop, which is provided by the HOC below contains
// a `loading` key while the query is in flight and posts when it is ready
function PostList (props) {
  const { loading, posts } = props.data
  if (loading) {
    return <div>Loading</div>
  }

  return (
    <ul>
      {posts.sort((x, y) => y.votes - x.votes).map(post =>
        <li key={post.id}>
          {post.title} by {' '}
          {post.author.firstName} {post.author.lastName} {' '}
          <span>({post.votes} votes)</span>

          <PostUpvoter id={post.id} votes={post.votes} />
        </li>
      )}
    </ul>
  )
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList here)
export default graphql(gql`
  query allPosts {
    posts: allPosts {
      id
      title
      votes
      author {
        id
        firstName
        lastName
      }
    }
  }
`)(PostList)
