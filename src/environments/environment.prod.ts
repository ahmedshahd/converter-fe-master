export const environment = {
  production: true,
  auth: {
    domain: process.env.NG_APP_DOMAIN,
    clientId: process.env.NG_APP_CLIENT_ID,
    audience:  process.env.NG_APP_AUDIENCE ,
    redirectUri: window.location.origin,
    errorPath: process.env.NG_APP_ERROR_PATH,
  },
  httpInterceptor: {
    allowedList: [`${process.env.NG_APP_API_URI}/*`],
  },
};
