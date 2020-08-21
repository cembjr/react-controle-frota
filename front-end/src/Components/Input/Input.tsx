import React, { InputHTMLAttributes } from "react";
import { Input as InputMaterial } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onChange?(evt: React.ChangeEvent<HTMLInputElement>): void;
  value: string;
  type?: string;
  width?: string;
}
const Input: React.FC<InputProps> = ({
  label,
  onChange,
  value,
  type,
  width
}) => {
  return (
    <div className="form-group">
      <FormControl style={{ width: `${width || "100%" }`, padding: "0 10px 0 0" }}>
        <InputLabel htmlFor="formatted-text-mask-input">{label} </InputLabel>
        <InputMaterial
          type={type || "text"}
          onChange={onChange}
          value={value}
        />
      </FormControl>
    </div>
  );
};

export default Input;
