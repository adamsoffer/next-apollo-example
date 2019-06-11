import Link from "next/link";
import { useRouter } from "next/router";
import { Container, LinkText } from "./styles";

const Header = () => {
  const router = useRouter();
  // Have to check if router exists until this issue is resolved
  // https://github.com/zeit/next.js/issues/6042
  if (router) {
    const { pathname } = router;
    return (
      <Container>
        <Link prefetch href="/">
          <a>
            <LinkText isActive={pathname === "/" && "is-active"}>Home</LinkText>
          </a>
        </Link>

        <Link prefetch href="/about">
          <a>
            <LinkText isActive={pathname === "/about" && "is-active"}>
              About
            </LinkText>
          </a>
        </Link>

        <Link href="https://github.com/ads1018/next-apollo-example">
          <a>
            <LinkText>Github</LinkText>
          </a>
        </Link>
      </Container>
    );
  } else {
    return null;
  }
};

export default Header;
