This is a standard React installation using the [create-react-app](https://github.com/facebookincubator/create-react-app)
script.

We have pre-configured this code base to use Bootstrap, so feel free to either
use that for layout and style or replace it with another framework, if you like.

## Quickstart

```
$ npm install
$ yarnpkg start
```

## API

The API client is implemented as a service. It provides a single method,
`getVenues()` which returns a Promise that resolves to a list of venue objects.

```javascript

// my-component.js
import Api from './services/api';
// ... later
const api = new Api();

api.getVenues().then(venues => console.log(venues));
```

Each venue object takes the form:
```javascript
{
  name:     "Venue name",
  type:     "(stadium|theater|club)",
  capacity: "[\d+]"
}
```
 It provides a single method,
`getVenues()` which returns a Promise that resolves to a list of venue objects.
