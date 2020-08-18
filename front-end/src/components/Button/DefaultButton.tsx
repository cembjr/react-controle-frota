import React from "react";
import { Button } from "@material-ui/core";

interface DefaultButtonProps {
  cor?: "inherit" | "primary" | "secondary" | "default";
  onClick(): void;
  onClick(event: React.FormEvent<HTMLFormElement>): void
  type?: "button" | "submit" | "reset";
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ cor, onClick, type, children }) => {
  return (
    <Button
      variant="contained"
      color={cor || "primary"}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </Button>
  );
};

export default DefaultButton;
