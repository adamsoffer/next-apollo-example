import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const GET_PAGE = gql`
  query PageQuery($id: ID, $path: String) {
    Page(id: $id, path: $path) {
      title
    }
  }
`;

function PageName() {
  const router = useRouter();
  const variables =
    router.query.previewId != null
      ? { id: router.query.previewId }
      : { path: router.asPath };

  const { loading, error, data, fetchMore } = useQuery(GET_PAGE, {
    variables: variables
  });
  if (data && data.Page) {
    return <h1>{data.Page.title}</h1>;
  }
  return <div>Loading...</div>;
}

export default PageName;
