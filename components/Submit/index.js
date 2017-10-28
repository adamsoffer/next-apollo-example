import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Form, H1, Input } from './styles'

function Submit({ createPost }) {
  function handleSubmit(e) {
    e.preventDefault()

    let title = e.target.elements.title.value
    let url = e.target.elements.url.value

    if (title === '' || url === '') {
      window.alert('Both fields are required.')
      return false
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = `http://${url}`
    }

    createPost(title, url)

    // reset form
    e.target.elements.title.value = ''
    e.target.elements.url.value = ''
  }

  return (
    <Form onSubmit={handleSubmit}>
      <H1>Submit</H1>
      <Input placeholder="title" name="title" />
      <Input placeholder="url" name="url" />
      <button type="submit">Submit</button>
    </Form>
  )
}

const createPost = gql`
  mutation createPost($title: String!, $url: String!) {
    createPost(title: $title, url: $url) {
      id
      title
      votes
      url
      createdAt
    }
  }
`

export default graphql(createPost, {
  props: ({ mutate }) => ({
    createPost: (title, url) =>
      mutate({
        variables: { title, url },
        updateQueries: {
          allPosts: (previousResult, { mutationResult }) => {
            const newPost = mutationResult.data.createPost
            return Object.assign({}, previousResult, {
              // Append the new post
              allPosts: [newPost, ...previousResult.allPosts]
            })
          }
        }
      })
  })
})(Submit)
