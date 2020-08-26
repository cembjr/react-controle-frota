import "date-fns";
import format from "date-fns/format";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { ptBR } from "date-fns/locale";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

interface InputDatePickerProps {
  label: string;
  value: Date | null;
  handleChange(data: MaterialUiPickersDate): void;
}

export const InputData: React.FC<InputDatePickerProps> = (
  props: InputDatePickerProps
) => {
  const minDate = new Date(2020, 0, 1);
  const maxDate = new Date(2099, 12, 31);

  return (
    <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          autoOk
          className="dateTimeModalPicker"
          inputVariant="outlined"
          label={props.label}
          value={props.value}
          onChange={props.handleChange}
          cancelLabel="Cancelar"
          margin="normal"
          format="dd/MM/yyyy"
          minDate={minDate}
          maxDate={maxDate}
          invalidDateMessage="Data em formato inválido."
          minDateMessage={`A data deve ser maior que ${format(
            minDate,
            "dd/MM/yyyy"
          )}`}
          maxDateMessage={`A data deve ser menor do que ${format(
            maxDate,
            "dd/MM/yyyy"
          )}`}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};
