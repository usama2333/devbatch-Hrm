import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import logo from "../../assests/images/logo.png";
import dashboard from "../../assests/images/dashboard.png";
import user from "../../assests/images/user.png";
import line from "../../assests/images/line.png";
import Navbar from "../../components/navbar/Navbar";
import flower from "../../assests/images/flower.png";
import Dashboard from "../../components/dashboard/Dashboard";
import User from "../../components/user/User";
import { dashboardSx, relBox, userSx } from "./style";

const Home = () => {
  const [firstH, setFirstH] = useState("20%");
  const [secondH, setSecondH] = useState("80%");
  const [check, setCheck] = useState(false);
  const [displayText, setDisplayText] = useState("grid");
  const [show, setShow] = useState("dashboard");

  const heightHandler = () => {
    setFirstH((pre) => (pre == "20%" ? "10%" : "20%"));
    setSecondH((pre) => (pre == "80%" ? "90%" : "80%"));
    setCheck((pre) => (pre == false ? true : false));
    setDisplayText((pre) => (pre == "grid" ? "none" : "grid"));
    console.log("click");
  };

  const dashboardHandler = () => {
    console.log("dashboard Click");
    setShow("dashboard");
  };

  const userHandler = () => {
    console.log("user Click");
    setShow("user");
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
              background:
                "transparent linear-gradient(180deg, #FE8062 0%, #7B2713 100%) 0% 0% no-repeat padding-box",
              boxShadow: "3px 0px 10px #0000000D",
              opacity: 1,
              height: "65rem",
            }}
          >
            <Box sx={relBox}>
              <Box
                onClick={heightHandler}
                sx={{
                  height: "5.4rem",
                  width: "5.4rem",
                  position: "absolute",

                  ml: check
                    ? "90px"
                    : {
                        xs: "80px",
                        sm: "100px",
                        md: "170px",
                        lg: "227px",
                        xl: "280px",
                        custom: "330px",
                      },
                  mt: "30px",
                  background: "#FE8062 0% 0% no-repeat padding-box",
                  boxShadow: "-5px 0px 6px #0000000D",
                  opacity: 1,
                  borderRadius: "100%",
                  cursor: "pointer",
                  // display: displayText,
                  display: "grid",
                  placeContent: "center",
                }}
              >
                <Box
                  component="img"
                  sx={{ display: "inline-block" }}
                  src={line}
                ></Box>
              </Box>

              {!check ? (
                <Box component="img" src={logo}></Box>
              ) : (
                <Box
                  component="img"
                  sx={{ cursor: "pointer" }}
                  src={flower}
                ></Box>
              )}

              <Stack
                onClick={dashboardHandler}
                direction="row"
                sx={{
                  mt: "4.4rem",
                  padding: "1rem 0",
                  width: "100%",
                  cursor: "pointer",
                  boxSizing: "border-box",
                background: show === 'dashboard' && "transparent linear-gradient(90deg, #FFFFFF26 0%, #4A90E200 100%) 0% 0% no-repeat padding-box" 
                    
                }}
              >
                <Box component="img" src={dashboard}></Box>

                <Typography
                  sx={{
                    font: "normal normal normal 15px/18px Product Sans",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
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
                sx={{
                  mt: "1rem",
                  width: "100%",
                  padding: "1rem 0",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  background: show === 'dashboard' && "transparent linear-gradient(90deg, #FFFFFF26 0%, #4A90E200 100%) 0% 0% no-repeat padding-box" 
                }}
              >
                <Box component="img" src={user}></Box>

                <Typography
                  sx={{
                    font: "normal normal normal 15px/18px Product Sans",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
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
            }}
          >
            <Box>
              <Navbar />
            </Box>

            <Box>
              {show === "dashboard" && <Dashboard />}
              {show === "user" && <User />}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Home;
