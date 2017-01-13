import PostList from '../components/PostList'
import Header from '../components/Header'
import withData from '../lib/withData'

function App () {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      <PostList />
    </div>
  )
}
export default withData(App)
