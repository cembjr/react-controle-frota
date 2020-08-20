import React from "react";
import { Button } from "@material-ui/core";

interface DefaultButtonProps {
  cor?: "inherit" | "primary" | "secondary" | "default";
  action?: any
  type?: "button" | "submit" | "reset";
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ cor, action, type, children }) => {
  return (
    <Button
      variant="contained"
      color={cor || "primary"}
      onClick={action}
      type={type || "button"}
      style={{ margin: "0 5px 0 0"}}
    >
      {children}
    </Button>
  );
};

export default DefaultButton;
