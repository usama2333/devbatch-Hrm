import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import logo from "../../assests/images/logo.png";
import dashboard from "../../assests/images/dashboard.png";
import user from "../../assests/images/user.png";
import line from "../../assests/images/line.png";
import Navbar from "../../components/navbar/Navbar";
import calander from '../../assests/images/calander.png';
import Department from "../../components/department/Department";
import red from "../../assests/images/blue.png";
import blue from "../../assests/images/red.png";

const testHandler = () => {
  console.log("click");
};


const depart =[ 
  {
  img : blue,
  name : 'No of Users',
  user : '22000'
},
{
  img : red,
  name : 'Departmnet',
  user : '07'
},

]

const Dashboard = () => {
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
              flex: "0 0 20%",
              background:
                "transparent linear-gradient(180deg, #FE8062 0%, #7B2713 100%) 0% 0% no-repeat padding-box",
              boxShadow: "3px 0px 10px #0000000D",
              opacity: 1,
              height: "65rem",
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
                onClick={testHandler}
                sx={{
                  height: "5.4rem",
                  width: "5.4rem",
                  position: "absolute",
                  ml: {
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
                }}
              >
                <Box
                  component="img"
                  sx={{ display: "inline-block", ml: "18px", mt: "1.8rem" }}
                  src={line}
                ></Box>
              </Box>

              <Box component="img" src={logo}></Box>
              <Stack
                direction="row"
                sx={{
                  mt: "5rem",
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
                  }}
                >
                  User
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              flex: "0 0 80%",
            }}
          >
            <Box>
              <Navbar />
            </Box>

            <Box>
              <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Box sx={{ mt: "4.5rem" }}>
                  <Typography
                    sx={{
                      font: "normal normal normal 20px/24px Product Sans",
                      letterSpacing: "0px",

                      ml: "4rem",
                      opacity: 1,
                    }}
                  >
                    Welcome
                  </Typography>
                  <Typography
                    sx={{
                      font: "normal normal bold 20px/24px Product Sans",
                      letterSpacing: "0px",

                      ml: "4rem",
                      opacity: 1,
                    }}
                  >
                    Hassan Farooq!
                  </Typography>
                </Box>

                <Box
                  sx={{
                    background: "#FCFCFC 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: 1,
                    mr : '4rem',
                    height : '5rem',
                    display : 'flex',
                    justifyContent : 'center',
                    alignItems : 'center',
                    padding : '0px 2rem',
                    mt : '3rem'

                  }}
                >
                  <Stack direction='row'>

                 
                  <Box component='img' src={calander}></Box>
                  <Typography sx={{
                     font: "normal normal normal 16px/19px Product Sans",
                    letterSpacing: "0px",
                    color: "#707787",
                    opacity: 1,
                    ml : '1rem'
                  }}>
                  Jul, 28 2022 - Jul, 28 2022
                  </Typography>
                  </Stack>

                </Box>
              </Stack>
            </Box>

            {/* start depart section here */}

            <Box sx={{
              mt : '2rem'
            }}>
                <Stack direction='row' justifyContent='space-evenly'>

                {depart.map((data) => (
                  <Box>
                    <Department img={data.img} name={data.name} user={data.user}/>
                  </Box>
                ))}
                  
                 
                  <Box>add new user</Box>
                </Stack>
            </Box>
              
            {/* end department section here */}

          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
