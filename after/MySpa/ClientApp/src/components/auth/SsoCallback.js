import React from "react";
import { UserManager } from "oidc-client";

function SsoCallback(props) {
  new UserManager({ response_mode: "query" })
    .signinRedirectCallback()
    .then(function () {
      // TODO: Does the root need to be configurable if the app is in a virtual directory?
      window.location = "/";
    })
    .catch(function (e) {
      console.error(e);
    });

  return <div>Signing in...</div>;
}

export default SsoCallback;
