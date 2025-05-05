import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';
import styles from './CustomInput.module.css';

export default function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      {...props}
      label={label}
      fullWidth
      margin="normal"
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
      className={styles.input}
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      InputProps={{ sx: { borderRadius: 2 } }}
      aria-describedby={meta.error ? `${field.name}-error` : undefined}
    />
  );
}