import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MailIcon from '@mui/icons-material/Mail';
import  { Button , TextField} from '@mui/material';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import {makeStyles} from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';

// dialogue box
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';

import Sidebar from '../sidebar/Sidebar'
import {useNavigate} from 'react-router-dom'

const drawerWidth = 230;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '50px',
  backgroundColor: '#F8F9FA',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const useStyles = makeStyles(() => ({
    mainRoot: {
        backgroundColor: '#F8F9FA',
        paddingTop: '6px',
        paddingLeft: '5px',
        height: '75px',
        color: '#353b48',
        borderLeft: '1px solid #dcdde1',
        borderBottom: '1px solid #dcdde1',
    },
    root: {
      marginLeft: '25px',
      display: 'flex',
      cursor : 'pointer',
      justifyContent: 'space-between',
      maxWidth: '170px',
      backgroundColor: '#F8F9FA',
    },
    btn: {
      color: '#2c3e50',
      textTransform: 'none',
      fontSize: '15px',
      border: 'none',
      boxShadow: 'none',
      '&:hover' :{
        color: '#0984e3',
        backgroundColor: 'transparent'
      }
    },
    btn1: {
      backgroundColor: 'inherit',
      textTransform: 'none',
      color: '#2c3e50',
      fontWeight: 500,
      border: 'none !important',
      fontSize: '16px',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
      },
      '&:hover': {
        color: '#0984e3',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
    },
    btn2:{
      marginTop: '10px',
      "& .MuiBadge-badge": {
        color: "#FFFFFF",
        fontSize: '12px',
        backgroundColor: "#e15f41"
      }
    },
    icon: {
      backgroundColor: 'inherit',
      color: 'inherit',
    },
    firstIcons : {
      fontSize : '20px'
    },
    drawerSize : {
        minWidth : '500px'
    },
    textFields: {
        width: '400px',
    },
}))


// dialogue
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PersistentDrawerLeft() {
  const history = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  // dialogue
  const [dialogue, setdialogue] = React.useState(false);
  const handleClickOpen = () => {
      console.log("Calicked")
    setdialogue(true);
  };
  const handleClose = () => {
    setdialogue(false);
  };


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

    const signOut = () => {
      localStorage.removeItem("profile");
      history('/signin')
    }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className={classes.mainRoot} >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon  />
          </IconButton>
          <Box className={classes.root} >
                <SearchIcon onClick={handleClickOpen}  style={{fontSize : '22px'}} />
          </Box>


          <Box sx={{ flexGrow: 1 }} />


          <Box sx={{ display: { xs: 'none', md: 'flex' } , marginRight: '35px' }}>


            <Button className={classes.btn1} variant="contained" component="span"  onClick={signOut} disableElevation={true} >
              Logout
            </Button>
          </Box>


          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        className={classes.drawerSize}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <CloseIcon    style={{ fontSize : '22px' , color: '#FFFFFF' , backgroundColor: 'crimson' ,  marginRight : '0px', borderRadius : '50%'}} /> : <ChevronRightIcon  style={{ fontSize : '22px' , color: '#FFFFFF' , backgroundColor: '#192a56' ,  marginRight : '80px',  borderRadius : '50%'}} />}
          </IconButton>
        </DrawerHeader>
        <Sidebar/>
      </Drawer>

      <Dialog
        open={dialogue}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <TextField
                id="outlined-password-input"
                label="Search here ..."
                type="text"
                autoComplete="current-password"
                className={classes.textFields}
                size="small"
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Search</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
