import React, { Fragment, useState, useEffect, useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Stack,
  MenuItem,
  Menu,
  IconButton,
} from "@mui/material";
import bell from "../../assests/images/bell.png";
import {
  bellIconBox,
  dashboardBox,
  mainBox,
  menuItemSx,
  menuLogoutSx,
  navEmail,
  navStack,
  navTypo,
  pieIcon,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TestNotifications from "../notification/TestNotifications";
import pie from '../../assests/images/pie.png'


const Navbarr = () => {
  const authCtx = useContext(AuthContext);
  const show = useSelector((state) => state.table.show);
  const data = useSelector((state) => state.table.data);
  const navData = useSelector((state) => state.table.nav);
  const [lastdata, setLastdata] = useState([]);

  const dispatch = useDispatch();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  console.log(navData,'nav......................')

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDashboard = () => {
    setAnchorEl(null);
    dispatch(tableActions.setShow("dashboard"));
    navigate('/dashboard');
  };
  const handleUser = () => {
    setAnchorEl(null);
    dispatch(tableActions.setShow("user"));
    navigate('/user');
  };
  const handleAddUser = () => {
    setAnchorEl(null);
    dispatch(tableActions.setShow("adduser"));
    navigate('/adduser');
  };
  const handleLogout = () => {
    setAnchorEl(null);
    authCtx.logout();
    navigate("/login");
    dispatch(tableActions.setNav([]));
    dispatch(tableActions.setShow("dashboard"));
    dispatch(tableActions.setCheckinstatus(false));
    dispatch(tableActions.setCheckoutstatus(false));
  
  };

  useEffect(() => {
    setLastdata(data[data.length - 1]);
    dispatch(tableActions.setName(lastdata));
  }, [data]);

  return (
    <Fragment>
      <Box sx={mainBox}>
        <AppBar
          position="static"
          sx={{ background: "inherit", boxShadow: "none" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={dashboardBox}>
              {show === "dashboard" && "Dashboard"}
              {show === "user" && "User"}
              {show === "adduser" && "Add Users"}
              {show === "updateuser" && "Edit Users"}
              {show === "userdetailview" && "User Detail"}
              {show === "checkin" && "Check In/Out"}
            </Typography>
            
            {/* <Box component="img" sx={bellIconBox} src={bell}></Box> */}
            <Box sx={bellIconBox}>
             <TestNotifications/>
            </Box>

            {/* <Box sx={bellIconBox}>
              <Badge badgeContent={4} color="error">
                <NotificationsNoneIcon sx={{color :'#FE8062 ', width : '35px' , height : '35px'}}
                />
              </Badge>
            </Box> */}

            <Stack sx={navStack}>
              <Typography sx={navTypo}>{navData.userData.name}</Typography>

              <Typography sx={navEmail}>{navData.userData.email}</Typography>
            </Stack>
            {auth && (
              <Box>
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
                  sx={{ mt: "55px", boxSizing: "border-box" }}
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Box
                    sx={{
                      // backgroundColor: "#FE8062",
                      boxSizing: "border-box",
                      margin: "0px",
                    }}
                  >
                    <MenuItem sx={menuItemSx} onClick={handleDashboard}>
                      Dashboard
                    </MenuItem>
                    <MenuItem sx={menuItemSx} onClick={handleUser}>
                      User
                    </MenuItem>
                    <MenuItem sx={menuItemSx} onClick={handleAddUser}>
                      Add User
                    </MenuItem>
                    <MenuItem sx={menuLogoutSx} onClick={handleLogout}>
                      Logout
                    </MenuItem>
                  </Box>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
};

export default Navbarr;
