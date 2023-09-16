import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment, useState, useEffect } from "react";
import logo from "../../assests/images/logo.png";
import dashboard from "../../assests/images/dashboard.png";
import user from "../../assests/images/user.png";
import line from "../../assests/images/line.png";
import Navbar from "../../components/navbar/Navbar";
import flower from "../../assests/images/flower.png";
import Dashboard from "../../components/dashboard/Dashboard";
import User from "../../components/user/User";
import {
  dashboardSx,
  relBox,
  tableDummy,
  transitionBox,
  userSx,
} from "./style";
import AddUser from "../../components/addUser/AddUser";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import PersonIcon from "@mui/icons-material/Person";
import WidgetsIcon from "@mui/icons-material/Widgets";
import UserDetail from "../../components/userdetail/UserDetail";

const Home = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.table.show);
  const check = useSelector((state) => state.table.check);

  const [firstH, setFirstH] = useState("20%");
  const [secondH, setSecondH] = useState("80%");
  // const [check, setCheck] = useState(false);
  const [displayText, setDisplayText] = useState("grid");

  useEffect(() => {
    // Code to run on component mount

    dispatch(tableActions.setData(tableDummy));
  }, []);
  const heightHandler = () => {
    setFirstH((pre) => (pre == "20%" ? "10%" : "20%"));
    setSecondH((pre) => (pre == "80%" ? "90%" : "80%"));
    // setCheck((pre) => (pre == false ? true : false));
    dispatch(tableActions.setCheck());
    setDisplayText((pre) => (pre == "grid" ? "none" : "grid"));

    console.log("click");
  };

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
        <Stack direction="row">
          <Box
            sx={{
              flex: `0 0 ${firstH}`,
              transition: "flex 0.3s ease-in-out",
              backfaceVisibility: "hidden",
              background:
                "transparent linear-gradient(180deg, #FE8062 0%, #7B2713 100%) 0% 0% no-repeat padding-box",
              boxShadow: "3px 0px 10px #0000000D",
              opacity: 1,
              // height: "65rem",
              height: "100vh",
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

              {!check ? (
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
                    ml: { xxs: "1rem", xs: "1rem", sm: "1rem" },
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
              flex: `0 0 ${secondH}`,
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
