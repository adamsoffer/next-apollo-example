import { withApollo } from "next-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: new HttpLink({
    uri:
      "https://cms.qa-platform.brightspot.psdops.com/graphql/delivery/test-delivery-api?site=https://react.qa-platform.brightspot.psdops.com/",
    headers: {
      "X-Site": "https://cms.qa-platform.brightspot.psdops.com/"
    }
  }),
  cache: new InMemoryCache()
});

export default withApollo(apolloClient);
