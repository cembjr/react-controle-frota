import React from "react";
import IconButton from "./IconButton";

interface DeleteButtonProps {
  action: any;
}
const DeleteButton: React.FC<DeleteButtonProps> = ({ action }) => {
  return <IconButton action={action} icon="trash" type="danger" />;
};

export default DeleteButton;
