# js-media-query

For some reason I can't get parcel to build on Netlify using their recipe for vanilla React. Locally, dev and build both run fine. However, when I deploy to Netlify the build commands produce JS with a [React #130](https://reactjs.org/docs/error-decoder.html/?invariant=130&args[]=object&args[]=) error that prevents compilation/build.

- `yarn dev`
- `yarn build`
