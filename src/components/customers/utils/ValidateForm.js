import * as Yup from 'yup';

const validateLoginForm = () => {
  return Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup.string().required('Required')
  });
};

const validateRegisterForm = () => {
  return Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email().required('Required'),
    password: Yup.string().required('Required'),
    verifiedPassword: Yup.string().required('Required')
  });
}

export {
  validateLoginForm,
  validateRegisterForm
};