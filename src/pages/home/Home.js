import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import logo from "../../assests/images/logo.png";
import dashboard from "../../assests/images/dashboard.png";
import user from "../../assests/images/user.png";
import line from "../../assests/images/line.png";
import Navbar from "../../components/navbar/Navbar";
import red from "../../assests/images/blue.png";
import blue from "../../assests/images/red.png";
import flower from "../../assests/images/flower.png";
import Dashboard from "../../components/dashboard/Dashboard";

const depart = [
  {
    img: blue,
    name: "No of Users",
    user: "22000",
  },
  {
    img: red,
    name: "Departmnet",
    user: "07",
  },
];

const Home = () => {
  const [firstH, setFirstH] = useState("20%");
  const [secondH, setSecondH] = useState("80%");
  const [check, setCheck] = useState(false);
  const [displayText, setDisplayText] = useState("grid");

  const heightHandler = () => {
    setFirstH((pre) => (pre == "20%" ? "10%" : "20%"));
    setSecondH((pre) => (pre == "80%" ? "90%" : "80%"));
    setCheck((pre) => (pre == false ? true : false));
    setDisplayText((pre) => (pre == "grid" ? "none" : "grid"));
    console.log("click");
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
              // height: "65rem",
            }}
          >
            <Box
              sx={{
                ml: { xs: "1rem", sm: "2rem" },
                mr: { xs: "1rem", sm: "2rem", md: "0rem" },
                mt: "3rem",
                position: "relative",
              }}
            >
              <Box
                onClick={heightHandler}
                sx={{
                  height: "5.4rem",
                  width: "5.4rem",
                  position: "absolute",
                
                  ml: check ? ('90px') : ({
                    xs: "80px",
                    sm: "100px",
                    md: "170px",
                    lg: "227px",
                    xl: "280px",
                    custom: "330px",
                  }), 
                  mt: "30px",
                  background: "#FE8062 0% 0% no-repeat padding-box",
                  boxShadow: "-5px 0px 6px #0000000D",
                  opacity: 1,
                  borderRadius: "100%",
                  cursor: "pointer",
                  // display: displayText,
                  display : 'grid',
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
              
                direction="row"
                sx={{
                  mt: "4.4rem",
                  padding: "1rem 0",
                  width: "100%",
                  cursor: "pointer",
                  boxSizing: "border-box",
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
               
                direction="row"
                sx={{
                  mt: "1rem",
                  width: "100%",
                  padding: "1rem 0",
                  boxSizing: "border-box",
                  cursor: "pointer",
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
              <Dashboard/>
            </Box>

  
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Home;
