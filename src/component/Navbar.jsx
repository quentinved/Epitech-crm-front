import "../styles/Navbar.css";
import logo from "/vite.svg";
import { Auth } from "aws-amplify";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const auth = useAuthContext();
  return (
    <div className="navbar">
      <div className="logoGroup">
        <img src={logo} alt="logo" width={45} />
        <h2>Epitech-CRM</h2>
      </div>
      <div className="buttonGroup">
        {auth.isConnected && <h3>Hi {auth.user} 👋</h3>}
        {auth.admin && (
          <button onClick={() => navigate("/article")}>Admin</button>
        )}
        {!auth.isConnected && (
          <button onClick={() => Auth.federatedSignIn()}>Login</button>
        )}
        {auth.isConnected && (
          <button onClick={() => navigate("/profile")}>Profile</button>
        )}
        {auth.isConnected && (
          <button
            onClick={() => {
              auth.dispatch({ type: "LOGOUT" });
              Auth.signOut();
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
