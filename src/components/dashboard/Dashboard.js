import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import calander from "../../assests/images/calander.png";
import Department from "../department/Department";
import red from "../../assests/images/blue.png";
import blue from "../../assests/images/red.png";
import icon from "../../assests/images/icon.png";
import graph from "../../assests/images/graph.png";
import { userName, userRecent } from "./style";
import User from "../user/User";


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
              <Box>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box sx={{ mt: "4rem" }}>
                  <Typography
                    sx={{
                      font: {
                        xs: "normal normal normal 18px/22px Product Sans",
                        sm: "normal normal normal 20px/24px Product Sans",
                      },
                      letterSpacing: "0px",

                      ml: { xs: "2rem", sm: "4rem" },
                      opacity: 1,
                    }}
                  >
                    Welcome
                  </Typography>
                  <Typography
                    sx={{
                      font: {
                        xs: "normal normal bold 18px/22px Product Sans",
                        sm: "normal normal bold 20px/24px Product Sans",
                      },
                      letterSpacing: "0px",
                      letterSpacing: "0px",

                      ml: { xs: "2rem", sm: "4rem" },
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
                    width: { md: "50rem", sm: "45rem", xs: "28rem" },
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
                        font: {
                          xs: "normal normal normal 16px/20px Product Sans",
                          sm: "normal normal normal 18px/22px Product Sans",
                          md: "normal normal normal 20px/24px Product Sans",
                        },
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
                          width: { xs: "14rem", sm: "25rem", md: "29rem" },
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
                            font: {
                              xs: "normal normal normal 12px/15px Product Sans",
                              sm: "normal normal normal 14px/17px Product Sans",
                            },
                            letterSpacing: "0px",
                            color: "#707787",
                          }}
                        >
                          hassan@gmail.com
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          width: { xs: "9rem", sm: "14rem", md: "16rem" },
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
                            font: {
                              xs: "normal normal normal 12px/14px Product Sans",
                              sm: "normal normal normal 13px/15px Product Sans",
                            },
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
              flexWrap="wrap-reverse"
              justifyContent="center"
              alignItems="center"
              sx={{
                mt: "2rem",
                ml: { xs: "0rem", sm: "3rem" },
                pb: "4.2rem",
              }}
            >
              <Box
                sx={{
                  flex: {
                    lg: "0 0 50%",
                    md: "0 0 80%",
                    sm: "0 0 90%",
                    xs: "0 0 90%",
                  },
                  mt: { xs: "2rem", lg: "0rem" },
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
                    width: { lg: "49.5rem", xs: "100%" },
                    height: "25rem",
                  }}
                ></Box>
              </Box>

              <Box
                sx={{
                  flex: {
                    lg: "0 0 50%",
                    md: "0 0 80%",
                    sm: "0 0 90%",
                    xs: "0 0 90%",
                  },
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
                    mr: { xs: "0rem", lg: "3rem" },
                    padding: "0.9rem 1.3rem",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    sx={{
                      background: "#F3F3F3 0% 0% no-repeat padding-box",
                      padding: "0.6rem 0rem",
                      boxSizing: "border-box",
                      borderRadius: "3px",
                    }}
                  >
                    <Typography sx={userName}>User name</Typography>
                    <Typography sx={userRecent}>Department</Typography>
                    <Typography sx={userRecent}>Timing/Date</Typography>
                  </Stack>

                  <User />
                </Box>
              </Box>
            </Stack>

            {/* end graph section */}
      
    </Fragment>
  )
}

export default Dashboard
