# Visual regression testing on the cheap

I want to whack some visual regression tests on my frontend stuff without
spending any money or bloating my project. This is my attempt at that.

## Dependencies

- `yarn`
- `docker`
- `docker-compose`

## Try it

```bash
yarn install
yarn test
```

## Overview

We have the usual `src` and `test` directories. `src` contains a `components`
subdirectory, which holds an example component I've borrowed from
[`microsoft/TypeScript-React-Starter`](https://github.com/microsoft/TypeScript-React-Starter).
And `test` holds our logic for testing this example component. That is, testing
that its appearance doesn't change.

There's quite a lot going on in `test`, but at a high-level what we're doing is:

1. Serving a page from inside a docker container that will render the component _on it's own_.
2. Spinning up [Puppeteer](https://pptr.dev/) inside a docker container and using
   it to screenshot the page we created in the previous step.
3. Using [Jest](https://jestjs.io),
   specifically [`jest-image-snapshot`](https://github.com/americanexpress/jest-image-snapshot),
   to compare the screenshots created in the previous step with any existing
   screenshots.
