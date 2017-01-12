This is a standard React installation using the [create-react-app](https://github.com/facebookincubator/create-react-app)
script.

## Quickstart

```
$ npm install
$ yarnpkg start
```

## API

The API client is implemented as a service.

```javascript

// my-component.js
import Api from './services/api';
// ... later
const api = new Api();

api.getVenues().then(venues => console.log(venues));
```
