import React, { Fragment,useState ,useEffect,useContext} from "react";
import {AppBar,Box,Toolbar,Typography,Stack,MenuItem,Menu,IconButton } from "@mui/material";
import bell from "../../assests/images/bell.png";
import {bellIconBox,dashboardBox,mainBox,navEmail,navStack,navTypo,pieIcon,} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Navbarr = () => {
  const authCtx = useContext(AuthContext);
  const show = useSelector((state) => state.table.show);
  const data = useSelector((state) => state.table.data);
  const [lastdata,setLastdata] = useState([]);

  const dispatch = useDispatch();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

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
    dispatch(tableActions.setShow('dashboard'));
  };
  const handleUser = () => {
    setAnchorEl(null);
    dispatch(tableActions.setShow('user'));
  };
  const handleAddUser = () => {
    setAnchorEl(null);
    dispatch(tableActions.setShow('adduser'));
  };
  const handleLogout = () => {

    setAnchorEl(null);
    authCtx.logout();
    navigate('/login')
    
  };

  useEffect(()=> {
    setLastdata(data[data.length - 1]);
     dispatch(tableActions.setName(lastdata));
  },[data])


  return (
    <Fragment>
      <Box sx={mainBox}>
        <AppBar
          position="static"
          sx={{ background: "inherit", boxShadow: "none" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={dashboardBox}>
              {show === 'dashboard' && 'Dashboard'}
              {show === 'user' && 'User'}
              {show === 'adduser' && 'Add Users'}
              {show === 'userdetailview' && 'User Detail'}
            </Typography>

            <Box component="img" sx={bellIconBox} src={bell}></Box>
           

            <Stack sx={navStack}>
              <Typography sx={navTypo}>{lastdata.name}</Typography>

              <Typography sx={navEmail}>
                {lastdata.email}
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
                <Box component="img" sx={pieIcon} src={lastdata.image}></Box>
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
