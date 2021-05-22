import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import StoreIcon from '@material-ui/icons/Store';
import { default as React, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.scss';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  storeIcon: {
    marginRight: theme.spacing(2),
    cursor: 'pointer',
  },
  title: {
    flexGrow: 1,
  },

  link: {
    color: '#fff',
    textDecoration: 'none',
  },
}));

Header.propTypes = {};

function Header(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Link to='/' className={classes.link}>
            <StoreIcon className={classes.storeIcon}></StoreIcon>
          </Link>
          <Typography variant='h6' className={classes.title}>
            Shopping
          </Typography>
          <NavLink className='nav-link' to='/todos'>
            <Button className={classes.link}>Todos</Button>
          </NavLink>
          <NavLink className='nav-link' to='/album'>
            <Button className={classes.link}>Albums</Button>
          </NavLink>
          <Button color='inherit'>Login</Button>
          <Button color='inherit' onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog
        disableEscapeKeyDown
        disableBackdropClick
        open={open}
        onClose={handleClose}
        aria-labelledby='draggable-dialog-title'
      >
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Header;
