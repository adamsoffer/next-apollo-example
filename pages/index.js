import Main from '../lib/layout'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'
import withData from '../lib/apollo'

export default withData(props => (
  <Main>
    <Header />
    <Submit />
    <PostList />
  </Main>
))
