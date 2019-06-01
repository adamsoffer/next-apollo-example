import Link from "next/link";
import { withRouter } from "next/router";
import { Container, LinkText } from "./styles";

const Header = ({ router }) => {
  console.log(router.pathname);
  return <Container>hi</Container>;
};

export default withRouter(Header);
