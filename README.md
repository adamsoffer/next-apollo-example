# Next & Apollo Example [![Build Status](https://travis-ci.org/ads1018/next-apollo-example.svg?branch=master)](https://travis-ci.org/ads1018/next-apollo-example)

*Note: this example has been merged into the  [Next.js](https://github.com/zeit/next.js/) `examples/` directory as an [official showcase](https://github.com/zeit/next.js/tree/master/examples/with-apollo).
The only difference between the two examples is the CSS-in-JS solution. This example features my preferred CSS-in-JS solution, [Styletron](http://styletron.js.org), whereas the other example features [styled-jsx](https://github.com/zeit/styled-jsx) (for those who prefer a more traditional CSS syntax).

## Demo
https://next-with-apollo.now.sh

## How to use
Install it and run

```bash
npm install
npm run dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example
Apollo is a GraphQL client that allows you to easily query the exact data you need from a GraphQL server. In addition to fetching and mutating data, Apollo analyzes your queries and their results to construct a client-side cache of your data, which is kept up to date as further queries and mutations are run, fetching more results from the server.

In this simple example, we integrate Apollo seamlessly with Next by wrapping our *pages* inside a [higher-order component (HOC)](https://facebook.github.io/react/docs/higher-order-components.html). Using the HOC pattern we're able to pass down a central store of query result data created by Apollo into our React component hierarchy defined inside each page of our Next application.

On initial page load, while on the server and inside `getInitialProps`, we invoke the Apollo method,  [`getDataFromTree`](http://dev.apollodata.com/react/server-side-rendering.html#getDataFromTree). This method returns a promise; at the point in which the promise resolves, our Apollo Client store is completely initialized.

This example relies on [graph.cool](http://graph.cool) for its GraphQL backend and [Styletron](http://styletron.js.org) for it's CSS-in-JS solution.

## Integrating Apollo with Redux
By default, Apollo Client creates its own internal Redux store to manage queries and their results. If you are already using Redux for the rest of your application, you can have the client [integrate with your existing store](http://dev.apollodata.com/react/redux.html) instead. To see how this is done checkout the [redux branch.](https://github.com/ads1018/next-apollo-example/tree/redux)

## Styled Components
If you prefer Styled Components over Styletron for your CSS-in-JS solution checkout the [styled-components](https://github.com/ads1018/next-apollo-example/tree/styled-components) branch.
