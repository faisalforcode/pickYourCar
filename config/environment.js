'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'pick-your-car',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyDwzI1uGIcXO1pwij5QHt1pUegTpSZFmiA",
      authDomain: "pickyourcar-74134.firebaseapp.com",
      databaseURL: "https://pickyourcar-74134.firebaseio.com",
      projectId: "pickyourcar-74134",
      storageBucket: "pickyourcar-74134.appspot.com",
      messagingSenderId: "35102651034"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV['g-map'] = {
  exclude: true,
  libraries: ['places', 'geometry'],
  key: 'AIzaSyBFrGspv_bAWX8DLskVp8h1seRQd19mqmY',
  client: 'chou.shruti',
  channel: 'my-google-map-api-channel',
  version: '3.26',
  language: 'ru',
  protocol: 'https'
};
  apiKey: '080zLu3C9W2fhyE3BVbOGCMiEjIjMdy0'

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
