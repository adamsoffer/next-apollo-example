# Next & Apollo Example [![Build Status](https://travis-ci.org/adamsoffer/next-apollo-example.svg?branch=master)](https://travis-ci.org/adamsoffer/next-apollo-example)

This example utilizes the [next-apollo](https://www.npmjs.com/package/next-apollo) package which is ideal if you want to tuck away some of the ceremony involved when using Apollo in your Next.js app. It also features my preferred CSS-in-JS solution, [Emotion](https://emotion.sh/).

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

In this simple example, we integrate Apollo seamlessly with Next by wrapping our _pages_ inside a [higher-order component (HOC)](https://facebook.github.io/react/docs/higher-order-components.html). Using the HOC pattern we're able to pass down a central store of query result data created by Apollo into our React component hierarchy defined inside each page of our Next application.

On initial page load, while on the server and inside `getInitialProps`, we invoke the Apollo method, [`getDataFromTree`](http://dev.apollodata.com/react/server-side-rendering.html#getDataFromTree). This method returns a promise; at the point in which the promise resolves, our Apollo Client store is completely initialized.

This example relies on [graph.cool](http://graph.cool) for its GraphQL backend and [Emotion](https://emotion.sh/) for it's CSS-in-JS solution.
