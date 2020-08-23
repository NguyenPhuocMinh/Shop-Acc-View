import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextFieldCustom = props => {
  const {
    label,
    name,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    type
  } = props;
  return (
    <TextField
      autoFocus
      label={label}
      margin="normal"
      fullWidth
      type={type}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[name]}
      required
      error={errors[name] && touched[name]}
      helperText={(errors[name] && touched[name]) && errors[name]}
    />
  )
};

export default TextFieldCustom;