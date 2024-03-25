import React from "react";
import Navbar from "../navbar/Navbar";
import "./layout.scss";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
}
