import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState, useLayoutEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { flower, line, logo, relBox, tableDummy, transitionBox } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import PersonIcon from "@mui/icons-material/Person";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { Link, Outlet } from "react-router-dom";


const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.table.show);
  const check = useSelector((state) => state.table.check);
  const edit = useSelector((state) => state.table.edit);
  const [reduceSize, setreduceSize] = useState(false);
  const enable = isMobile || reduceSize;
  const firstH = enable ? "10%" : "20%";
  const secondH = enable ? "90%" : "80%";
  const displayText = enable ? "none" : "grid";
  const allUsers = useSelector((state) => state.table.data);

  

  useLayoutEffect(() => {
    dispatch(tableActions.setData(allUsers));
  }, []);
  const heightHandler = () => {
    dispatch(tableActions.setCheck());
    setreduceSize(!reduceSize);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)"); // Define your breakpoint here

    const handleMediaQueryChange = (event) => {
      setreduceSize(event.matches);
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
    if(edit.length !== 0 ) {
      dispatch(tableActions.setEdit([]));
    }

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
        <Stack
          direction="row"
          sx={{
            height: "100vh",
            
          }}
        >
          <Box
            sx={{
              flex: `0 0 ${firstH}`,
              // flex : '0 0 10%',
              transition: "all 0.3s ease-in-out",
              // backfaceVisibility: "hidden",
              background:
                "transparent linear-gradient(180deg, #FE8062 0%, #7B2713 100%) 0% 0% no-repeat border-box",
              boxShadow: "3px 0px 10px #0000000D",
              opacity: 1,
              minHeight: "100vh",
              position: "sticky",
              top : 0,
              boxSizing: "border-box",
              // overflow: 'hidden',
              
            }}
          >
            <Box sx={relBox}>
              <Box onClick={heightHandler} sx={transitionBox}>
                <Box
                  component="img"
                  sx={{ display: "inline-block", width : {xxs : '70%', sm : '100%'} }}
                  src={line}
                ></Box>
              </Box>

              {!enable ? (
                <Box
                  component="img"
                  sx={{
                    pl: {
                      xxs: "1rem",
                      xs: "1rem",
                      sm: "2rem",

                    },
                    objectFit: "contain",
                  }}
                  src={logo}
                ></Box>
              ) : (
                <Box
                  component="img"
                  sx={{
                    cursor: "pointer",
                    pl: { xxs: "0rem", xs: "0.5rem", sm: "1rem" },
                     height: { xxs: "22px", sm: "auto" },
                    objectFit: "contain",
                    
                    // display: { xxs: "block", sm: "none" },
                  }}
                  src={flower}
                ></Box>
              )}

              <Link 
              style={{textDecoration : 'none'}}
              to="/dashboard">
              <Stack
                onClick={dashboardHandler}
                direction="row"
                alignItems="center"
                sx={{
                  mt: "4.4rem",
                  padding: "1rem 0",
                  width: "100%",
                  // margin : '0 auto',
                  cursor: "pointer",
                  boxSizing: "border-box",
                  background:
                    show === "dashboard" &&
                    "transparent linear-gradient(90deg, #FFFFFF26 0%, #4A90E200 100%) 0% 0% no-repeat border-box",
                }}
              >
                <Box
                  sx={{
                    boxSizing: "border-box",
                    pl: { xxs: "0.5rem", xs: "1rem", sm: "2rem" },
                  }}
                >
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
                    boxSizing: "border-box",
                    letterSpacing: "0px",
                    color: show === "dashboard" ? "#FFFFFF" : "#F6C2B5",
                    pl: "1rem",
                    opacity: 1,
                    display: displayText,
                  }}
                >
                  Dashboard
                </Typography>

               
              </Stack>
              </Link>

            <Link 
             style={{textDecoration : 'none'}}
            to="/user">
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
                    "transparent linear-gradient(90deg, #FFFFFF26 0%, #4A90E200 100%) 0% 0% no-repeat border-box ",
                }}
              >
               
                <Box sx={{ pl: { xxs: "0.5rem", xs: "1rem", sm: "2rem" } }}>
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
                    pl: "1.3rem",
                    opacity: 1,
                    display: displayText,
                  }}
                >
                  User
                </Typography>
              </Stack>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              flex: `0 0 ${secondH}`,
              // flex : '0 0 90%',
              transition: "all 0.3s ease-in-out",
              boxSizing: "border-box",
              // overflow: 'hidden'
            }}
          >
            <Box>
              <Navbar />
            </Box>

            <Box>
 
              <Outlet />
              
            </Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Home;
