import * as Yup from 'yup';

const validateLoginForm = () => {
  return Yup.object().shape({
    email: Yup.string().email().required('Bắt buộc nhập'),
    password: Yup.string().required('Bắt buộc nhập')
  });
};

const validateRegisterForm = () => {
  return Yup.object().shape({
    firstName: Yup.string().required('Bắt buộc nhập'),
    lastName: Yup.string().required('Bắt buộc nhập'),
    email: Yup.string().email().required('Bắt buộc nhập'),
    password: Yup.string().required('Bắt buộc nhập'),
    verifiedPassword: Yup.string().required('Bắt buộc nhập')
  });
}

export {
  validateLoginForm,
  validateRegisterForm
};