/* jshint node: true */
module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'two-homes-web',
    podModulePrefix: 'two-homes-web/pods',
    environment: environment,
    contentSecurityPolicy: { 'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com" },
    firebase: 'https://flickering-inferno-9463.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',

    flashMessageDefaults: {
     timeout: 3000,
     extendedTimeout: 375
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    DS: {
      host: 'http://localhost:3000',
      namespace: 'v1'
    },
    'ember-simple-auth': {
      authenticationRoute: 'auth.login',
      routeIfAlreadyAuthenticated: 'app.parenting-groups',
      routeAfterAuthentication: 'app.parenting-groups'
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' http://fonts.gstatic.com",
      'connect-src': "'self'",
      'img-src': "'self' data:",
      'media-src': "'self'"
    }

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
