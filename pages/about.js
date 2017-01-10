import Link from 'next/link'
import withData from '../lib/withData'

function About () {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <h1>About Page</h1>
    </div>
  )
}

export default About
