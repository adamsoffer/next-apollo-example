import Main from "../lib/layout";
import Header from "../components/Header";
import Submit from "../components/Submit";
import PostList from "../components/PostList";
import PageName from "../components/PageName";
import withApollo from "../lib/apollo";

const Home = props => {
  return (
    <Main>
      <Header />
      <Submit />
      <PostList />
      <PageName />
    </Main>
  );
};

export default withApollo({ ssr: true })(Home);
