import React from 'react';
import { Formik, Form } from 'formik';
import { validateRegisterForm } from '../utils/ValidateForm';
import TextFieldCustom from '../utils/TextFieldCustom';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const FormRegister = props => {
  const { handleSubmitRegister, handleClose } = props;
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        verifiedPassword: ''
      }}
      onSubmit={(values) => handleSubmitRegister(values)}
      validationSchema={validateRegisterForm()}
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
              label="Họ"
              type="text"
              name="firstName"
              {...props}
            />
            <TextFieldCustom
              label="Họ"
              type="text"
              name="lastName"
              {...props}
            />
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
            <TextFieldCustom
              label="Xác nhận mật khẩu"
              type="password"
              name="verifiedPassword"
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

export default FormRegister;