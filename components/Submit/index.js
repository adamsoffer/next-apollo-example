import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Form, H1, Input } from "./styles";

const CREATE_POST = gql`
  mutation createPost($title: String!, $url: String!) {
    createPost(title: $title, url: $url) {
      id
      title
      votes
      url
      createdAt
    }
  }
`;

const GET_POSTS = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    }
  }
`;

export default function Submit() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const [createPost, { error, data }] = useMutation(CREATE_POST, {
    variables: { title, url },
    update: (proxy, mutationResult) => {
      const { allPosts } = proxy.readQuery({
        query: GET_POSTS,
        variables: { first: 10, skip: 0 }
      });
      const newPost = mutationResult.data.createPost;
      proxy.writeQuery({
        query: GET_POSTS,
        variables: { first: 10, skip: 0 },
        data: {
          allPosts: [newPost, ...allPosts]
        }
      });
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (title === "" || url === "") {
      window.alert("Both fields are required.");
      return false;
    }

    // prepend http if missing from url
    var pattern = /^((http|https):\/\/)/;
    createPost(title, !pattern.test(url) ? `https://${url}` : url);

    // reset form
    e.target.elements.title.value = "";
    e.target.elements.url.value = "";
  }

  return (
    <Form onSubmit={handleSubmit}>
      <H1>Submit</H1>
      <Input
        placeholder="title"
        name="title"
        onChange={e => setTitle(e.target.value)}
      />
      <Input
        placeholder="url"
        name="url"
        onChange={e => {
          var pattern = /^((http|https):\/\/)/;
          console.log(!pattern.test(url));
          return setUrl(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </Form>
  );
}
