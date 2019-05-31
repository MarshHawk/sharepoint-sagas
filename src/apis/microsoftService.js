import * as Msal from 'msal';


export function login() {
  const config = {
    auth: {
      clientId: ''
    },
    cache: { cacheLocation: "localStorage", storeAuthStateInCookie: true }
  }

  const clientApplication = new Msal.UserAgentApplication(config);

  function authCallback(error, response) {
  }

  clientApplication.handleRedirectCallback(authCallback);

  clientApplication.loginRedirect(["UserActivity.ReadWrite.CreatedByApp"]);
}