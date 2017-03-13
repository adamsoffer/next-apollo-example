import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import jsxFlush from 'styled-jsx/server'
import { flush } from '../lib/styletron'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styletron = flush()
    const jsxStyles = jsxFlush()
    const stylesheets = styletron ? styletron.getStylesheets() : []
    return { ...page, jsxStyles, stylesheets }
  }
  render () {
    return (
      <html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className='_styletron_hydrate_'
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.media || ''}
              key={i}
            />
          ))}
          {this.props.jsxStyles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
