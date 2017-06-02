import React from 'react'
import { rehydrate, css } from 'glamor'
import glamorous from 'glamorous'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined' && window.__NEXT_DATA__ !== undefined) {
  rehydrate(window.__NEXT_DATA__.ids)
}

// Add global styles
css.global('*', {
  fontFamily: 'Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif'
})

css.global('body', {
  margin: 0,
  padding: '25px 50px'
})

css.global('a', {
  color: '#22BAD9',
  textDecoration: 'none'
})

css.global('footer', {
  backgroundColor: 'rgba(255, 255, 255, .95)',
  bottom: 0,
  fontSize: '12px',
  left: 0,
  padding: '15px 0',
  position: 'fixed',
  textAlign: 'center',
  width: '100%'
})

css.global('p', {
  fontSize: '14px',
  lineHeight: '24px'
})

css.global('article', {
  margin: '0 auto',
  maxWidth: '650px'
})

css.global('button', {
  alignItems: 'center',
  backgroundColor: '#22BAD9',
  border: 0,
  color: 'white',
  display: 'flex',
  padding: '5px 7px',
  transition: 'background-color .3s'
})

css.global('button:active', {
  backgroundColor: '#1B9DB7',
  transition: 'background-color .3s'
})

css.global('button:focus', {
  outline: 'none'
})

export default ({ children }) => (
  <div>
    <glamorous.Div>
      {children}
      <footer>
        Made by <a href='http://twitter.com/adamSoffer'>@adamSoffer</a>
      </footer>
    </glamorous.Div>
  </div>
)
