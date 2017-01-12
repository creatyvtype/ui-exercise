# emberjs

This is a standard Ember installation.  It has been pre-configured with an
application template.

You are free to implement everything is this template, or else create one or
more routes.

## API

The API client is implemented as a service.

```javascript

// my-component.js
export default Ember.Component.extend({
  api: Ember.inject.service(),

  didRender() {
    this.get('api').getVenues().then(venues => console.log(venues));
  }
});
```
