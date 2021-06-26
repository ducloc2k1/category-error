import { Box, Container, IconButton, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
import StoreIcon from '@material-ui/icons/Store';
import { default as React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import { logout } from '../../features/Auth/userSlice';
import './style.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  toolBar: {
    padding: '0px',
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

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  dialog: {
    paddingTop: theme.spacing(3),
  },
}));

Header.propTypes = {};

function Header(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const MODE = {
    REGISTER: 'register',
    LOGIN: 'login',
  };

  const loggedIn = useSelector((state) => state.user.current);

  const hasLogin = !!loggedIn.id;

  const [open, setOpen] = useState(false);

  const [mode, setMode] = useState(MODE.LOGIN);

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = !!anchorEl;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  const handleCloseMenu = () => {
    setAnchorEl(false);
  };

  const handleLogout = () => {
    const action = logout();

    setAnchorEl(null);

    dispatch(action);
  };

  return (
    <>
      <AppBar position='static'>
        <Container>
          <Toolbar className={classes.toolBar}>
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
            {hasLogin && (
              <>
                <IconButton onClick={handleClick} aria-controls='simple-menu' aria-haspopup='true'>
                  <AccountCircleIcon color='inherit' />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                  open={openMenu}
                  elevation={0}
                  onClose={handleCloseMenu}
                >
                  <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
              // <MenuListComposition handleLogout={handleLogout} />
            )}
            {!hasLogin && (
              <Button color='inherit' onClick={handleClickOpen}>
                Login
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Dialog
        disableEscapeKeyDown
        disableBackdropClick
        open={open}
        onClose={handleClose}
        aria-labelledby='draggable-dialog-title'
        classes={{ paper: classes.dialog }}
      >
        <IconButton className={classes.closeButton} onClick={handleClose} color='primary'>
          <CloseIcon />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register />
              <Box mt={2} textAlign='center'>
                <Button color='primary' onClick={() => setMode(MODE.LOGIN)}>
                  Already have account. Login here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login handleClose={handleClose} />
              <Box mt={2} textAlign='center'>
                <Button color='primary' onClick={() => setMode(MODE.REGISTER)}>
                  Don't have account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}

export default Header;
