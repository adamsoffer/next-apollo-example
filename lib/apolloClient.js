export async function getStandaloneApolloClient() {
  const { ApolloClient, InMemoryCache, HttpLink } = await import(
    "@apollo/client"
  );
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn"
    }),
    cache: new InMemoryCache()
  });
}
