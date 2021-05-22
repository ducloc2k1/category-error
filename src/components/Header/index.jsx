import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { default as React } from 'react';
import StoreIcon from '@material-ui/icons/Store';
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
  return (
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
        <Button color='inherit'>Register</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
