import { withData } from 'next-apollo'
import Main from '../lib/layout'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'
import config from '../lib/apolloConfig'

export default withData(config, props => (
  <Main>
    <Header pathname={props.url.pathname} />
    <Submit />
    <PostList />
  </Main>
))
