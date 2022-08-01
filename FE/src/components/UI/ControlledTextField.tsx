import * as React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

interface FormTextFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: any;
  errorMessage?: string;
  control: any;
}

export default function ControlledTextField(props: FormTextFieldProps) {
  const { name, label, placeholder, required, error, errorMessage, control } = props;

  return (
    <Controller
      name={name}
      control={control}
      /*defaultValue=""*/
      render={({ field: { onChange, value } }) => (
        <TextField
          variant="standard"
          fullWidth
          onChange={onChange}
          value={value}
          label={label}
          placeholder={placeholder}
          error={!!error}
          helperText={error ? errorMessage : null}
        />
      )}
      rules={{ required }}
    />
  );
}