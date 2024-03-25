import { Link, navigate } from "gatsby";
import React from "react";
import * as styles from "./navbar.module.scss";
import { useLoginContext } from "../../context/appContext";

export default function Navbar() {
  const { credentials, userLogout } = useLoginContext();
  const handleLogout = () => {
    userLogout();
    navigate("/");
  };

  return (
    <div className={styles.navbar}>
      <Link to="/home">Home</Link>
      {credentials.email && <button onClick={handleLogout}>Log-Out</button>}
    </div>
  );
}
