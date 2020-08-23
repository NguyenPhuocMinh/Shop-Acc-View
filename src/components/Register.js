import React, { useState, forwardRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import useStyles from '../styles/RegisterStyle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormRegister from '../form/FormRegister';
import { isEmpty } from 'lodash';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Register = props => {
  const { setOpenLogin } = props;
  const classes = useStyles();
  const [messageSuccess, setMessageSuccess] = useState('');
  const [messageErrors, setMessageErrors] = useState('');
  const [open, setOpenRegister] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleClickOpen = () => {
    setOpenRegister(true);
    setOpenLogin(false);
  };

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  const handleClose = () => {
    setOpenRegister(false);
  };

  const handleClickRedirectLogin = () => {
    setOpenRegister(false);
    setOpenLogin(true);
  }

  const handleSubmitRegister = (values) => {
    const REST_API = process.env.REACT_APP_REST_API_URL;
    const request = new Request(REST_API + `/customer/registers`, {
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
            if (!isEmpty(result.message)) {
              setOpenSnackBar(true);
              setMessageSuccess(result.message)
            }
            setOpenRegister(false);
            setOpenLogin(true)
            return result.message;
          })
      })
      .catch(err => {
        return Promise.reject(err);
      })
  };

  return (
    <>
      <Button
        color="primary"
        onClick={handleClickOpen}
        startIcon={<LockOpenIcon />}
      >
        Đăng ký
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle className={classes.text_center}>Đăng ký</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.text_center}>
            Nếu bạn đã có tài khoản xin đăng nhập tại đây !
            <Button
              color="primary"
              onClick={handleClickRedirectLogin}
              startIcon={<AccountCircleIcon />}
            >
              Đăng nhập
            </Button>
          </DialogContentText>
          <FormRegister
            handleSubmitRegister={handleSubmitRegister}
            handleClose={handleClose}
          />
        </DialogContent>
      </Dialog>
      {openSnackBar &&
        <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={handleCloseSnackBar}>
          <Alert onClose={handleCloseSnackBar} severity="success">
            {messageSuccess}
          </Alert>
        </Snackbar>
      }
      {openSnackBar &&
        <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={handleCloseSnackBar}>
          <Alert onClose={handleCloseSnackBar} severity="error">
            {messageErrors}
          </Alert>
        </Snackbar>
      }
    </>
  );
};

export default Register;