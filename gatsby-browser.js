import React from "react";
import ContextWrapper from "./src/context/appContext";

export const wrapRootElement = ({ element }) => {
  return <ContextWrapper>{element}</ContextWrapper>;
};
