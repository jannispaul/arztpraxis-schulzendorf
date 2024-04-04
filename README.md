# Gatsby Website

For information on Gatsby refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install Gatsby CLI

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

## Install node modules with yarn

```sh
cd arztpraxis-schulzendorf
yarn
```

## Run in development mode

```sh
gatsby develop
```

## Run in production mode

```sh
gatsby build && gatsby serve
```

## Issues

In case gastby throws an error:

- make sure you only use yarn (or npm, not both)
- delete node modules
- run `yarn`
- run `yarn upgrade --latest`

Yarn related errors:

- delete yarn.lock
- run `yarn`

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

## Deprecated Code

Run these instead:

```
node --openssl-legacy-provider node_modules/.bin/gatsby build
node --openssl-legacy-provider node_modules/.bin/gatsby develop
```

Source: https://github.com/gatsbyjs/gatsby/discussions/33723#discussioncomment-1553461
