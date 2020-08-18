import React, { InputHTMLAttributes } from 'react';
import MaskedInput from 'react-text-mask';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

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
      mask={['(', /\d/, /\d/, ')', ' ', /\d/,' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

interface InputTelefoneProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange(evt: React.ChangeEvent<HTMLInputElement>): void;
}

const InputTelefone: React.FC<InputTelefoneProps> = ({ value, onChange, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl>
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
}
export default InputTelefone;
