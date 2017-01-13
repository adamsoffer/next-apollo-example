import Link from 'next/prefetch'

export default () => (
  <div>
    { /* Prefetch using the declarative API */ }
    <Link href='/'>
      <a>Home</a>
    </Link>

    <Link href='/about'>
      <a>About</a>
    </Link>

    <style jsx>{`
      a {
        margin-right: 10px;
      }
    `}</style>
  </div>
)
