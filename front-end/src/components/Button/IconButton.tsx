import React from "react";
import { SpanButton } from "./buttonStyled";

interface IconButtonProps {
  action?: any;
  type?: "primary" | "secundary" | "warning" | "danger";
  icon?: string;
}
const IconButton: React.FC<IconButtonProps> = ({ action, type, icon }) => {
  return (
    <SpanButton
      className={`btn btn-${type || "prymary"} ${icon && `fa fa-${icon}`}`}
      onClick={action}
    ></SpanButton>
  );
};

export default IconButton;