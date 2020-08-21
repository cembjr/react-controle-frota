import React, { InputHTMLAttributes } from "react";
import MaskedInput from "react-text-mask";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

function TextMaskCustom(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

interface InputTelefoneProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange(evt: React.ChangeEvent<HTMLInputElement>): void;
}

const InputTelefone: React.FC<InputTelefoneProps> = ({
  value,
  onChange,
  width,
}) => {
  return (
    <div className="form-group">
      <FormControl style={{ width: `${width || "100%"}`, padding: "0 10px 0 0"  }}>
        <InputLabel htmlFor="formatted-text-mask-input">Telefone: </InputLabel>
        <Input
          value={value}
          onChange={onChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom as any}
        />
      </FormControl>
    </div>
  );
};
export default InputTelefone;
