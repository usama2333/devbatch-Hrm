import React, { Fragment,useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import bell from "../../assests/images/bell.png";
import pie from "../../assests/images/pie.png";
import { Stack } from "@mui/material";
import {bellIconBox,dashboardBox,mainBox,navEmail,navStack,navTypo,pieIcon,} from "./style";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import { useHistory } from "react-router-dom";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const Navbarr = () => {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleChange = (event) => {
    setAuth(event.target.checked);
    console.log(auth,'....................')
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDashboard = () => {
    setAnchorEl(null);
    dispatch(tableActions.setShow('dashboard'));
    console.log('dashhhhhhhhhh')
  };
  const handleUser = () => {
    setAnchorEl(null);
    dispatch(tableActions.setShow('user'));
    console.log('user..............')
  };
  const handleAddUser = () => {
    setAnchorEl(null);
    dispatch(tableActions.setShow('adduser'));
    console.log('user..............')
  };
  const handleLogout = () => {

    setAnchorEl(null);
    history.push('/login')
    console.log('log..............')
  };


  return (
    <Fragment>
      <Box sx={mainBox}>
        <AppBar
          position="static"
          sx={{ background: "inherit", boxShadow: "none" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={dashboardBox}>
              Dashboard
            </Typography>

            <Box component="img" sx={bellIconBox} src={bell}></Box>
           

            <Stack sx={navStack}>
              <Typography sx={navTypo}>AnnaBell James</Typography>

              <Typography sx={navEmail}>
                annabelljames123@devbatch.com
              </Typography>
            </Stack>
            {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {/* <AccountCircle /> */}
                <Box component="img" sx={pieIcon} src={pie}></Box>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
                <MenuItem onClick={handleUser}>User</MenuItem>
                <MenuItem onClick={handleAddUser}>Add User</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}

            
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
};

export default Navbarr;
