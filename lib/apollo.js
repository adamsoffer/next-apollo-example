import { withApollo } from "next-apollo";
import ApolloClient, { HttpLink, InMemoryCache } from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: "https://nextjs-graphql-with-prisma-simple.vercel.app/api",
  cache: new InMemoryCache()
});

export default withApollo(apolloClient);
