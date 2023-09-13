import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import logo from "../../assests/images/logo.png";
import dashboard from "../../assests/images/dashboard.png";
import user from "../../assests/images/user.png";
import line from "../../assests/images/line.png";
import Navbar from "../../components/navbar/Navbar";
import calander from "../../assests/images/calander.png";
import Department from "../../components/department/Department";
import red from "../../assests/images/blue.png";
import blue from "../../assests/images/red.png";
import TextField from "@mui/material/TextField";
import icon from "../../assests/images/icon.png";
import graph from "../../assests/images/graph.png";
import { userName, userRecent } from "./style";
import Users from "../../components/user/Users";
import User from "../../components/user/User";

const testHandler = () => {
  console.log("click");
};

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
                  display : 'grid',
                  placeContent : 'center'
                }}
              >
                <Box
                  component="img"
                  sx={{ display: "inline-block" }}
                  src={line}
                ></Box>
              </Box>

              <Box component="img" src={logo}></Box>
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
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box sx={{ mt: "4rem" }}>
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
                    mr: "4rem",
                    height: "5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0px 2rem",
                    mt: "3rem",
                  }}
                >
                  <Stack direction="row">
                    <Box component="img" src={calander}></Box>
                    <Typography
                      sx={{
                        font: "normal normal normal 16px/19px Product Sans",
                        letterSpacing: "0px",
                        color: "#707787",
                        opacity: 1,
                        ml: "1rem",
                      }}
                    >
                      Jul, 28 2022 - Jul, 28 2022
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Box>

            {/* start depart section here */}

            <Box
              sx={{
                mt: "2rem",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-evenly"
                flexWrap="wrap-reverse"
              >
                {depart.map((data) => (
                  <Box>
                    <Department
                      img={data.img}
                      name={data.name}
                      user={data.user}
                    />
                  </Box>
                ))}

                <Box
                  sx={{
                    background: "#FE8062 0% 0% no-repeat padding-box",
                    borderRadius: "10px",
                    opacity: 1,
                    width: "50rem",
                    pb: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      mt: "1.3rem",
                      ml: "1.7rem",
                    }}
                  >
                    <Typography
                      sx={{
                        font: "normal normal normal 20px/24px Product Sans",
                        letterSpacing: "0px",
                        color: "#FFFFFF",
                        opacity: 1,
                      }}
                    >
                      Add New Users
                    </Typography>
                    <Typography
                      sx={{
                        font: "normal normal normal 13px/15px Product Sans",
                        letterSpacing: "0px",
                        color: "#FFFFFF",
                        opacity: 1,
                        mt: "0.7rem",
                      }}
                    >
                      Add an Email & send the magic link to users.
                    </Typography>

                    <Stack direction="row">
                      <Box
                        sx={{
                          width: "29rem",
                          height: "3.2rem",
                          background: "#FFFFFF 0% 0% no-repeat padding-box",
                          border: "1px solid #EAEAEA",
                          borderRadius: "6px",
                          opacity: 1,
                          mt: "0.7rem",
                          display: "flex",

                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            ml: "1rem",
                            font: "normal normal normal 14px/17px Product Sans",
                            letterSpacing: "0px",
                            color: "#707787",
                          }}
                        >
                          hassan@gmail.com
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          width: "16rem",
                          height: "3.2rem",
                          background: "#FFFFFF 0% 0% no-repeat padding-box",
                          border: "1px solid #EAEAEA",
                          borderRadius: "6px",
                          opacity: 1,
                          mt: "0.7rem",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          ml: "1rem",
                        }}
                      >
                        <Typography
                          sx={{
                            ml: "1rem",
                            font: "normal normal normal 13px/15px Product Sans",
                            letterSpacing: "0px",
                            color: "#707787",
                            mr: "1.1rem",
                          }}
                        >
                          send link
                        </Typography>
                        <Box component="img" src={icon}></Box>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Stack>
            </Box>

            {/* end department section here */}

            {/* Start graph section */}

            <Stack
              direction="row"
              sx={{
                mt: "2rem",
                ml: "3rem",
              }}
            >
              <Box
                sx={{
                  flex: "0 0 50%",
                }}
              >
                <Typography
                  sx={{
                    font: "normal normal bold 18px/22px Product Sans",
                    letterSpacing: "0px",
                    color: "#3A3A3A",
                    mb: "1rem",
                  }}
                >
                  Users (General)
                </Typography>
                <Box
                  component="img"
                  src={graph}
                  sx={{
                    width: "51rem",
                    height: "25rem",
                  }}
                ></Box>
              </Box>

              <Box
                sx={{
                  flex: "0 0 50%",
                }}
              >
                <Typography
                  sx={{
                    font: "normal normal bold 18px/22px Product Sans",
                    letterSpacing: "0px",
                    color: "#3A3A3A",
                    mb: "1rem",
                  }}
                >
                  Recent Users
                </Typography>
                <Box
                  sx={{
                    border: "1px solid #F3F3F3",
                    borderRadius: "11px",
                    mr : '3rem',
                    padding : '0.9rem 1.3rem'
                  }}
                >
                  <Stack direction='row' justifyContent='space-evenly' alignItems='center' sx={{
                    background: '#F3F3F3 0% 0% no-repeat padding-box' ,padding : '0.6rem 0rem' , boxSizing : 'border-box', borderRadius: '3px'
                  }}>

                   <Typography sx={userName}>User name</Typography>
                   <Typography sx={userRecent}>Department</Typography>
                   <Typography sx={userRecent}>Timing/Date</Typography>

                  </Stack>

                  <User/>
                </Box>
              </Box>
            </Stack>

            {/* end graph section */}
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
