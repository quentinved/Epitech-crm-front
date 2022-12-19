import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { Amplify } from "aws-amplify";
import config from "./config/config";
import { AuthContenxtProvider } from "./aws/AuthContext";

Amplify.configure({
  Auth: {
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    mandatorySignIn: true,
    oauth: {
      domain: config.cognito.DOMAIN,
      scope: ["email", "openid", "profile"],
      redirectSignIn: config.cognito.REDIRECT_SIGN_IN,
      redirectSignOut: config.cognito.REDIRECT_SIGN_OUT,
      responseType: "code",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContenxtProvider>
      <RouterProvider router={router} />
    </AuthContenxtProvider>
  </React.StrictMode>
);
