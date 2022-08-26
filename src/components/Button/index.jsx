import React from "react";

const Button = ({ children, ...buttonProps }) => {
  return <button {...buttonProps}>{children}</button>;
};

export default Button;
