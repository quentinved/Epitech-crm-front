import { Hub } from "aws-amplify";
import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext.js";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "cognitoHostedUI":
          console.log("Authenticated...");
          dispatch({ type: "LOGIN", payload: data });
          navigate("/");
          break;
        case "cognitoHostedUI_failure":
          console.log("Error", data);
          break;
        default:
          break;
      }
    });
  }, []);

  return (
    <div>
      <h1>Please Wait...</h1>
    </div>
  );
};

export default Callback;
