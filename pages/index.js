import Main from '../lib/layout'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'
import withData from '../lib/apollo'

export default withData(({ url }) => (
  <Main>
    <Header pathname={url} />
    <Submit />
    <PostList />
  </Main>
))
