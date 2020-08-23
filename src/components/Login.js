import React, { useState, forwardRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from '../styles/LoginStyle';
import Register from './Register';
import MenuCustomer from '../menu/OpenMenuCustomer';
import FormLogin from '../form/FormLogin';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Login = props => {
  const classes = useStyles();
  const [open, setOpenLogin] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [messageErrors, setMessageErrors] = useState('');
  const [customerLogin, setCustomerLogin] = useState(null);

  const handleClickOpen = () => {
    setOpenLogin(true);
  };

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  const handleClose = () => {
    setOpenLogin(false);
  };

  const handleSubmitLogin = (values) => {
    const REST_API = process.env.REACT_APP_REST_API_URL;
    const request = new Request(REST_API + `/customer/logins`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    })
    return fetch(request)
      .then(response => {
        if (response.status >= 400) {
          return response.json()
            .then(result => {
              setOpenSnackBar(true);
              setMessageErrors(result.error);
              return result.error
            })
        }
        return response.json()
          .then(result => {
            setCustomerLogin(result);
            setOpenLogin(false);
            return result;
          })
      })
      .catch(err => {
        return Promise.reject(err);
      })
  };

  return (
    <div>
      {customerLogin && customerLogin.isLogin ?
        <MenuCustomer customer={customerLogin} /> :
        <Button
          style={{ color: '#8bc34a' }}
          onClick={handleClickOpen}
          startIcon={<AccountCircleIcon />}
        >
          Đăng nhập
        </Button>
      }
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle className={classes.text_center}>Đăng nhập</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.text_center}>
            Nếu bạn chưa có tài khoản xin đăng ký tại đây !
              <Register setOpenLogin={setOpenLogin} />
          </DialogContentText>
          <FormLogin
            handleSubmitLogin={handleSubmitLogin}
            handleClose={handleClose}
          />
        </DialogContent>
      </Dialog>
      {openSnackBar &&
        <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={handleCloseSnackBar}>
          <Alert onClose={handleCloseSnackBar} severity="error">
            {messageErrors}
          </Alert>
        </Snackbar>
      }
    </div>
  );
};

export default Login;