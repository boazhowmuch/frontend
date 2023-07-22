import * as React from "react";
import styles from './styles.module.scss';
import TextField from "@mui/material/TextField";

interface InputProps {
  label: string;
  type: string;
  ref: any;
}

export default function FormPropsTextFields(props: InputProps) {
  return (
    <TextField
      required
      id="outlined-required"
      label={props.label}
      type={props.type}
      className={styles.textField}
    />
  );
}
