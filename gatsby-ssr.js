const React = require("react");
const ContextWrapper = require("./src/context/appContext");

exports.wrapRootElement = ({ element }) => {
  return <ContextWrapper>{element}</ContextWrapper>;
};
