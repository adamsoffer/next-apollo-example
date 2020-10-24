import { gql, useMutation } from "@apollo/client";
import { Button } from "./styles";

const UPDATE_POST = gql`
  mutation votePost($id: String!) {
    votePost(id: $id) {
      id
      votes
      __typename
    }
  }
`;

export default function PostUpvoter({ id, votes }) {
  const [updatePost, { error, data }] = useMutation(UPDATE_POST, {
    variables: { id, votes: votes + 1 },
    optimisticResponse: {
      __typename: "Mutation",
      votePost: {
        __typename: "Post",
        id,
        votes: votes + 1
      }
    }
  });
  return <Button onClick={() => updatePost()}>{votes}</Button>;
}
