import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { KeyValue } from "../../Models/KeyValue";

interface SimpleSelectProps {
  label: string;
  value: string;
  onChange: any;
  itens: KeyValue[];
}
export const SimpleSelect: React.FC<SimpleSelectProps> = (
  props: SimpleSelectProps
) => {
  return (
    <FormControl style={{ width: "100%" }}>
      <InputLabel>{props.label}</InputLabel>
      <Select value={props.value} onChange={props.onChange}>
        {props.itens.map((item) => (
          <MenuItem key={item.key} value={item.key}>
            {item.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
