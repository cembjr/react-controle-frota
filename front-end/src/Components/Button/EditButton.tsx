import React from "react";
import IconButton from "./IconButton";

interface EditButtonProps {
  action: any;
}
const EditButton: React.FC<EditButtonProps> = ({ action }) => {
  return <IconButton action={action} icon="pencil" type="warning" />;
};

export default EditButton;
