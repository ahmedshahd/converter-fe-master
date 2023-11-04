export const environment = {
  production: false,
  apiUri: process.env.NG_APP_API_URI,
  auth: {
    domain: process.env.NG_APP_DOMAIN,
    clientId: process.env.NG_APP_CLIENT_ID,
    authorizationParams: {
      audience:  process.env.NG_APP_AUDIENCE ,
      redirect_uri: window.location.origin,
    },
    errorPath: process.env.NG_APP_ERROR_PATH,
  },
  httpInterceptor: {
    allowedList: [`${ process.env.NG_APP_API_URI }/*`],
  },
} as const;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
