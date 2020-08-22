import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextFieldCustom = props => {
  const {
    label, name, handleChange, handleBlur,
    values, className, errors, touched,
    type
  } = props;
  return (
    <TextField
      label={label}
      margin="normal"
      type={type}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[name]}
      required
      className={className}
      error={errors[name] && touched[name]}
      helperText={(errors[name] && touched[name]) && errors[name]}
    />
  )
};

export default TextFieldCustom;