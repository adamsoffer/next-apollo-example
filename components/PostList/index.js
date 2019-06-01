import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
// import PostUpvoter from '../PostUpvoter'

import ErrorMessage from "../ErrorMessage";
import {
  Container,
  List,
  ListItem,
  ListItemContainer,
  Num,
  A,
  Button
} from "./styles";

const POSTS_PER_PAGE = 10;

const GET_POSTS = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    }
    _allPostsMeta {
      count
    }
  }
`;

function PostList() {
  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: { skip: 0, first: POSTS_PER_PAGE },
    notifyOnNetworkStatusChange: true
  });
  if (data && data.allPosts && data.allPosts.length) {
    const areMorePosts = data.allPosts.length < data._allPostsMeta.count;
    return (
      <Container>
        <List>
          {data.allPosts.map((post, index) => (
            <ListItem key={post.id}>
              <ListItemContainer>
                <Num>{index + 1}. </Num>
                <A href={post.url}>{post.title}</A>
                {/* <PostUpvoter id={post.id} votes={post.votes} /> */}
              </ListItemContainer>
            </ListItem>
          ))}
        </List>
        {areMorePosts ? (
          <Button onClick={() => loadMorePosts(data, fetchMore)}>
            {loading ? "Loading..." : "Show More"}
          </Button>
        ) : (
          ""
        )}
      </Container>
    );
  }
  return <div>Loading...</div>;
}

function loadMorePosts(data, fetchMore) {
  return fetchMore({
    variables: {
      skip: data.allPosts.length
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) {
        return previousResult;
      }
      return Object.assign({}, previousResult, {
        // Append the new posts results to the old one
        allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
      });
    }
  });
}

export default PostList;
