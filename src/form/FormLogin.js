import React from 'react';
import { Formik, Form } from 'formik';
import { validateLoginForm } from '../utils/ValidateForm';
import TextFieldCustom from '../custom/TextFieldCustom';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const FormLogin = props => {
  const { handleSubmitLogin, handleClose } = props;
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
          <Form onSubmit={handleSubmit}>
            <TextFieldCustom
              label="Email"
              type="text"
              name="email"
              {...props}
            />
            <TextFieldCustom
              label="Mật khẩu"
              type="password"
              name="password"
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
                Xác nhận
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