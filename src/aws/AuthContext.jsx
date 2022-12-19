import { createContext, useReducer } from "react";
import { Auth } from "aws-amplify";
import { useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  const data = action.payload.signInUserSession;
  let admin = false;
  if (data.idToken.payload["cognito:groups"]) {
    data.idToken.payload["cognito:groups"].map((group) => {
      if (group === "Admin") {
        admin = true;
      }
    });
  }
  if (!data) return state;
  localStorage.setItem("idToken", data.idToken.jwtToken);
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.username,
        isConnected: true,
        accessToken: data.accessToken.jwtToken,
        idToken: data.idToken.jwtToken,
        refreshToken: data.refreshToken.token,
        admin: admin,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isConnected: false,
        accessToken: null,
        idToken: null,
        refreshToken: null,
        admin: null,
      };
    default:
      return state;
  }
};

export const AuthContenxtProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isConnected: false,
    accessToken: null,
    idToken: null,
    refreshToken: null,
    admin: null,
  });
  console.log("AuthContext state ==>", state);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((data) => {
        dispatch({ type: "LOGIN", payload: data });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
