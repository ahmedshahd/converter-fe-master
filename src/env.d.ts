declare namespace NodeJS {
  /** Merge declaration with `process` in order to override the global-scoped env. */
  export interface ProcessEnv {
    /**
     * Built-in environment variable.
     * @see Docs https://github.com/chihab/ngx-env#ng_app_env.
     */
    readonly NG_APP_ENV: string;

    readonly NG_APP_DOMAIN: string;
    readonly NG_APP_CLIENT_ID: string;
    readonly NG_APP_AUDIENCE: string;
    readonly NG_APP_API_URI: string;
    readonly NG_APP_APP_URI: string;
    readonly NG_APP_ERROR_PATH: string;

    // Add your environment variables below
  }
}
