import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";

export default function Header() {
  let { authToken, setAuthToken } = useContext(UserContext);

  return (
    <>
      <div>
        <Link to="/coses">Cosess </Link>
        <Link to="/enlloc">Enlloc </Link>
        <Link to="/about">About </Link>
        Token: <strong>{authToken}</strong>
      </div>
      <hr />
    </>
  );
}
