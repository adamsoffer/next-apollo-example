import Link from "next/link";
import { useRouter } from "next/router";
import { Container, LinkText } from "./styles";

const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Container>
      <Link href="/">
        <a>
          <LinkText isActive={pathname === "/" && "is-active"}>Home</LinkText>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <LinkText isActive={pathname === "/about" && "is-active"}>
            About
          </LinkText>
        </a>
      </Link>
      <a
        href="https://github.com/ads1018/next-apollo-example"
        target="__blank"
        rel="noopener noreferrer"
      >
        <LinkText>Github</LinkText>
      </a>
    </Container>
  );

  // const { pathname } = router
  // return (
  //   <Container>
  //     <Link href="/">
  //       <a>
  //         <LinkText isActive={pathname === '/' && 'is-active'}>Home</LinkText>
  //       </a>
  //     </Link>

  //     <Link href="/about">
  //       <a>
  //         <LinkText isActive={pathname === '/about' && 'is-active'}>
  //           About
  //         </LinkText>
  //       </a>
  //     </Link>

  // )
};

export default Header;
