import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment, useEffect,useState, useLayoutEffect } from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import User from "../../components/user/User";
import Navbar from "../../components/navbar/Navbar";
import AddUser from "../../components/addUser/AddUser";
import UserDetail from "../../components/userdetail/UserDetail";
import {flower,line,logo,relBox,tableDummy,transitionBox
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import PersonIcon from "@mui/icons-material/Person";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useMediaQuery } from '@mui/material';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.table.show);
  const check = useSelector((state) => state.table.check);
 const [reduceSize,setreduceSize]= useState(false)
const enable = isMobile|| reduceSize
  const firstH =enable ? '10%' : '20%'
  const secondH = enable ? '90%' : '80%'
  const displayText = enable ? 'none' : 'grid'

  useLayoutEffect(() => {
    dispatch(tableActions.setData(tableDummy));
  }, []);
  const heightHandler = () => {
    dispatch(tableActions.setCheck());
    setreduceSize(!reduceSize)
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)'); // Define your breakpoint here

    const handleMediaQueryChange = (event) => {
      setreduceSize(event.matches)
      setIsMobile(event.matches);
    };

    // Initial check
    handleMediaQueryChange(mediaQuery);

    // Add a listener for changes in the media query
    mediaQuery.addListener(handleMediaQueryChange);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const dashboardHandler = () => {
    dispatch(tableActions.setShow("dashboard"));
  };

  const userHandler = () => {
    dispatch(tableActions.setShow("user"));
  };

  const addUserHandler = () => {
    dispatch(tableActions.setShow("adduser"));
  };
  return (
    <Fragment>
      <Container
        disableGutters
        maxWidth="custom"
        sx={{
          width: "100%",
        }}
      >
        <Stack direction="row" sx={{
          height : '100vh'
        }}>
          <Box
            sx={{
              flex: {sm :`0 0 ${firstH}`, xxs : ' 0 0 10%'},
              transition: "flex 0.3s ease-in-out",
              backfaceVisibility: "hidden",
              background:
                "transparent linear-gradient(180deg, #FE8062 0%, #7B2713 100%) 0% 0% no-repeat padding-box",
              boxShadow: "3px 0px 10px #0000000D",
              opacity: 1,
              minHeight: "100vh",
              position: "sticky",
            }}
          >
            <Box sx={relBox}>
              <Box onClick={heightHandler} sx={transitionBox}>
                <Box
                  component="img"
                  sx={{ display: "inline-block" }}
                  src={line}
                ></Box>
              </Box>

              {!enable ? (
                <Box
                  component="img"
                  sx={{
                    ml: {
                      xxs: "1rem",
                      xs: "1rem",
                      sm: "2rem",
                     
                    },
                  }}
                  src={logo}
                ></Box>
              ) : (
                <Box
                  component="img"
                  sx={{
                    cursor: "pointer",
                    ml: { xxs: "0.5rem", xs: "0.5rem", sm: "1rem" },
                    height : {xxs : '24px' , sm : 'auto'}
                  }}
                  src={flower}
                ></Box>
              )}

              <Stack
                onClick={dashboardHandler}
                direction="row"
                alignItems="center"
                sx={{
                  mt: "4.4rem",
                  padding: "1rem 0",
                  width: "100%",
                  cursor: "pointer",
                  boxSizing: "border-box",
                  background:
                    show === "dashboard" &&
                    "transparent linear-gradient(90deg, #FFFFFF26 0%, #4A90E200 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <Box sx={{ ml: { xxs: "1rem", xs: "1rem", sm: "2rem" } }}>
                  <WidgetsIcon
                    sx={{
                      fontSize: "20px",
                      color: show === "dashboard" ? "#FFFFFF" : "#F6C2B5",
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    font: {
                      lg: "normal normal normal 15px/18px Product Sans",
                      xxs: "normal normal normal 12px/15px Product Sans",
                    },
                    letterSpacing: "0px",
                    color: show === "dashboard" ? "#FFFFFF" : "#F6C2B5",
                    ml: "1.3rem",
                    opacity: 1,
                    display: displayText,
                  }}
                >
                  Dashboard
                </Typography>
              </Stack>
                
              <Stack
                onClick={userHandler}
                direction="row"
                alignItems="center"
                sx={{
                  mt: "1rem",
                  width: "100%",
                  padding: "1rem 0",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  background:
                    show === "user" &&
                    "transparent linear-gradient(90deg, #FFFFFF26 0%, #4A90E200 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <Box sx={{ ml: { xxs: "1rem", xs: "1rem", sm: "2rem" } }}>
                  <PersonIcon
                    sx={{
                      fontSize: "20px",
                      color: show === "user" ? "#FFFFFF" : "#F6C2B5",
                    }}
                  />
                </Box>
                {/* <Box sx={{ml: { xxs: "1rem",xs: "1rem", sm: "2rem", color : 'red' }}} component="img" src={user}></Box> */}

                <Typography
                  sx={{
                    font: {
                      lg: "normal normal normal 15px/18px Product Sans",
                      xxs: "normal normal normal 12px/15px Product Sans",
                    },
                    letterSpacing: "0px",
                    color: show === "user" ? "#FFFFFF" : "#F6C2B5",
                    ml: "1.3rem",
                    opacity: 1,
                    display: displayText,
                  }}
                >
                  User
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              flex: {sm : `0 0 ${secondH}`, xxs : '0 0 90%'},
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Box>
              <Navbar />
            </Box>

            <Box>
              {show === "dashboard" && <Dashboard />}
              {show === "user" && <User adduser={addUserHandler} />}
              {show === "adduser" && <AddUser />}

              {show === "userdetailview" && <UserDetail />}
              {/* <UserDetail/> */}
            </Box>
          </Box>
        </Stack>
      </Container>
     
    </Fragment>
  );
};

export default Home;
