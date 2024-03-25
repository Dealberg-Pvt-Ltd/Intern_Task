import React from "react";
import * as styles from "./login.module.scss";
import { useLoginContext } from "../context/appContext";
import { navigate } from "gatsby";

export default function Login() {
  const { credentials, storeCreds } = useLoginContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>Test shop</h1>
      </div>
      <div className={styles.wrapper}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} method="post">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={credentials.email}
            onChange={(e) =>
              storeCreds({ ...credentials, email: e.target.value })
            }
            required
            placeholder="Enter your email"
          />
          <label htmlFor="otp">OTP</label>
          <input
            type="password"
            id="otp"
            name="otp"
            value={credentials.otp}
            placeholder="Enter OTP"
            onChange={(e) =>
              storeCreds({ ...credentials, otp: e.target.value })
            }
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
