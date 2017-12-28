import Link from 'next/link'
import { withRouter } from 'next/router'
import { Container, LinkText } from './styles'

const Header = ({ router: { pathname } }) => (
  <Container>
    <Link prefetch href="/">
      <a>
        <LinkText isActive={pathname === '/' && 'is-active'}>Home</LinkText>
      </a>
    </Link>

    <Link prefetch href="/about">
      <a>
        <LinkText isActive={pathname === '/about' && 'is-active'}>
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
)

export default withRouter(Header)
