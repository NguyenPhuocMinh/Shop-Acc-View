import React from 'react';
import { Formik, Form } from 'formik';
import { validateLoginForm } from '../utils/ValidateForm';
import TextFieldCustom from '../utils/TextFieldCustom';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const FormLogin = props => {
  const { handleSubmitLogin, handleClose, classes } = props;
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => handleSubmitLogin(values)}
      validationSchema={validateLoginForm()}
    >
      {(props) => {
        const {
          dirty,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <Form onSubmit={handleSubmit} className={classes.half_line_margin}>
            <TextFieldCustom
              label="Email"
              type="text"
              name="email"
              className={classes.text_field}
              {...props}
            />
            <TextFieldCustom
              label="Mật khẩu"
              type="password"
              name="password"
              className={classes.text_field}
              {...props}
            />
            <DialogActions>
              <Button
                onClick={handleClose}
                color="primary">
                Hủy
              </Button>
              <Button
                type="submit"
                disabled={!dirty}
                color="primary"
              >
                Đăng nhập
              </Button>
              <Button
                type="button"
                color="primary"
                onClick={handleReset}
                disabled={!dirty}
              >
                Reset
              </Button>
            </DialogActions>
          </Form>
        )
      }}
    </Formik>
  )
};

export default FormLogin;