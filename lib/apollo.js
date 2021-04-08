import withApollo from "next-with-apollo";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri:
        "https://cms.qa-platform.brightspot.psdops.com/graphql/delivery/test-delivery-api?site=https://react.qa-platform.brightspot.psdops.com/",
      headers: {
        "X-Site": "https://cms.qa-platform.brightspot.psdops.com/"
      },
      cache: new InMemoryCache().restore(initialState || {})
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);
