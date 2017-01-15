import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import PostUpvoter from './PostUpvoter'

// The data prop, which is provided by the HOC below contains
// a `loading` key while the query is in flight and posts when it is ready
function PostList (props) {
  const { loading, allPosts } = props.data
  if (loading) {
    return <div>Loading</div>
  }

  return (
    <section>
      <ul>
        {allPosts.sort((x, y) => y.votes - x.votes).map((post, index) =>
          <li key={post.id}>
            <div>
              <span>{index + 1}. </span>
              <a href={post.url}>{post.title}</a>
              <PostUpvoter id={post.id} votes={post.votes} />
            </div>

          </li>
        )}
      </ul>
      <style jsx>{`
        li {
          display: block;
          margin-bottom: 5px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </section>
  )
}

const allPosts = gql`
  query allPosts {
    allPosts {
      id
      title
      votes
      url
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList here)
export default graphql(allPosts)(PostList)
