/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/account/signup": {
    post: operations["CreateAccount"];
  };
  "/authentication/login": {
    /** @description Allows a client to login provided a username and password, required they are not currently logged in */
    post: operations["Login"];
  };
  "/authentication/logout": {
    /** @description Logs the client out using clear cookie, returning an error if no sessionToken exists. */
    get: operations["Logout"];
  };
  "/authentication/session": {
    /** @description Gets information about the current session, returning a unauthorized response if no session exists. */
    get: operations["GetSessionInfo"];
  };
  "/oa-spec.json": {
    /** @description Gets the generated version of the file at ../../src/tsoa/swagger.json, which should contain a valid open-api v3 spec generated by tsoa. */
    get: operations["GetSpec"];
  };
  "/status": {
    /** @description Checks the status of the server and additionally checks if you are authenticated. Security is optional. */
    get: operations["Get"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    SuccessfulSignupResponse: {
      /** @enum {boolean} */
      success: true;
    };
    LoggedInErrResponse: {
      /** @enum {string} */
      err: "LoggedIn";
    };
    SignupAlreadyExistsErr: {
      /** @enum {string} */
      err: "Already Exists";
    };
    ValidationDetails: ({
        /** Format: double */
        argument?: number;
        message: string;
        validation: string;
      })[];
    /** @description AccDetailInvalidErr and give status code 400 */
    AccDetailInvalidErr: {
      /** @enum {string} */
      err: "Validation Err";
      details: {
        username: components["schemas"]["ValidationDetails"];
        password: components["schemas"]["ValidationDetails"];
      };
    };
    /**
     * @description A Error that occurs because of Redis, should have status of 500.
     * Also see the RedisError constant.
     */
    RedisError: {
      /** @enum {string} */
      err: "Redis Failure";
    };
    SignupBody: {
      username: string;
      password: string;
    };
    GenericSuccessResponse: {
      /** @enum {boolean} */
      success: true;
    };
    LoginBody: {
      username: string;
      password: string;
    };
    LoggedOutErrResponse: {
      /** @enum {string} */
      err: "LoggedOut";
    };
    SessionInfo: {
      user: string;
    };
    /** @description Obtain the return type of a function type */
    "ReturnType_typeofJSON.parse_": Record<string, never>;
    OpenAPISpec: components["schemas"]["ReturnType_typeofJSON.parse_"];
    GetStatusResponse: {
      /** @enum {boolean} */
      okay: true;
      authenticated: boolean;
    };
  };
  responses: {
  };
  parameters: {
  };
  requestBodies: {
  };
  headers: {
  };
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  CreateAccount: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["SignupBody"];
      };
    };
    responses: {
      /** @description Account Created */
      201: {
        content: {
          "application/json": components["schemas"]["SuccessfulSignupResponse"] | Record<string, never>;
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["AccDetailInvalidErr"];
        };
      };
      403: {
        content: {
          "application/json": components["schemas"]["LoggedInErrResponse"];
        };
      };
      409: {
        content: {
          "application/json": components["schemas"]["SignupAlreadyExistsErr"];
        };
      };
      500: {
        content: {
          "application/json": components["schemas"]["RedisError"];
        };
      };
    };
  };
  Login: {
    /** @description Allows a client to login provided a username and password, required they are not currently logged in */
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginBody"];
      };
    };
    responses: {
      /** @description You have been logged in */
      200: {
        content: {
          "application/json": components["schemas"]["GenericSuccessResponse"] | Record<string, never>;
        };
      };
      /** @description The Password Is Wrong */
      401: never;
      403: {
        content: {
          "application/json": components["schemas"]["LoggedInErrResponse"];
        };
      };
      /** @description Account Doesn't Exist */
      404: never;
    };
  };
  Logout: {
    /** @description Logs the client out using clear cookie, returning an error if no sessionToken exists. */
    responses: {
      /** @description You have been logged out */
      200: {
        content: {
          "application/json": components["schemas"]["GenericSuccessResponse"] | Record<string, never>;
        };
      };
      /** @description You can't log out without being logged in! */
      401: {
        content: {
          "application/json": components["schemas"]["LoggedOutErrResponse"];
        };
      };
    };
  };
  GetSessionInfo: {
    /** @description Gets information about the current session, returning a unauthorized response if no session exists. */
    responses: {
      /** @description Session info has been returned */
      200: {
        content: {
          "application/json": components["schemas"]["SessionInfo"] | Record<string, never>;
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["LoggedOutErrResponse"];
        };
      };
      500: {
        content: {
          "application/json": components["schemas"]["RedisError"];
        };
      };
    };
  };
  GetSpec: {
    /** @description Gets the generated version of the file at ../../src/tsoa/swagger.json, which should contain a valid open-api v3 spec generated by tsoa. */
    responses: {
      /** @description The JSON object of the current OAPI spec. */
      200: {
        content: {
          "application/json": components["schemas"]["OpenAPISpec"];
        };
      };
    };
  };
  Get: {
    /** @description Checks the status of the server and additionally checks if you are authenticated. Security is optional. */
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["GetStatusResponse"];
        };
      };
    };
  };
}