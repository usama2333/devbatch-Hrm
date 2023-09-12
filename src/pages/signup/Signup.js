import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import backgroundImg from "../../assests/images/loginBack.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Signup = () => {
  return (
    <Fragment>
      <Container
        maxWidth="custom"
        sx={{
          width: "100%",

          /* UI Properties */
          background: "#FADCD5 0% 0% no-repeat padding-box",
          opacity: 1,
        }}
      >
        <Stack direction="row">
          <Box
            sx={{
              flex: {xs : '0 0 0%', sm :'0 0 0%' , md : '0 0 40%'},
              position : 'relative'
            }}
          >
            <Box
              sx={{
                mt: "5rem",
                // mb : '2rem',
                width: {xs : '350px',sm : '551px' , },
                // height: "500px",
                /* UI Properties */
                background: "#F9F9F9 0% 0% no-repeat padding-box",
                boxShadow: "0px 0px 70px #FE80626E",
                borderRadius: {xs : '2rem' , sm : '4rem'},
                opacity: 1,
                position : 'absolute',
                left : {xs : '0rem' , lg : '10.5rem'}
              }}
            >
              <Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    paddingTop: "5rem",
                    font: "normal normal bold 35px/43px Product Sans",
                    letterSpacing: "0px",
                    color: "#3A3A3A",
                    textTransform: "uppercase",
                    opacity: 1,
                  }}
                >
                  sign up
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    paddingTop: "0.8rem",
                    font: "normal normal bold 1.6rem Product Sans",
                    letterSpacing: "0px",
                    color: "#667085",
                    opacity: 1,
                  }}
                >
                  Please fill your detail to create your account.
                </Typography>

                <Box
                  sx={{
                    marginLeft: {xs : '1.5rem' , sm : '8rem'},
                    mr : {xs : '1.5rem'}
                  }}
                >
                  <Stack>
                    <Typography
                      sx={{
                        mt: "1rem",
                        mb: "0.6rem",
                        font: "normal normal bold 1.6rem Product Sans",
                        letterSpacing: "0px",
                        color: "#344054",
                        opacity: 1,
                      }}
                    >
                      Email
                    </Typography>

                    <TextField
                      sx={{ maxWidth: "376px" }}
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </Stack>

                  <Stack>
                    <Typography
                      sx={{
                        mt: "1rem",
                        mb: "0.6rem",
                        font: "normal normal bold 1.6rem Product Sans",
                        letterSpacing: "0px",
                        color: "#344054",
                        opacity: 1,
                      }}
                    >
                      Name
                    </Typography>
                    <TextField
                      sx={{ maxWidth: "376px" }}
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </Stack>

                  <Stack>
                    <Typography
                      sx={{
                        mt: "1rem",
                        mb: "0.6rem",
                        font: "normal normal bold 1.6rem Product Sans",
                        letterSpacing: "0px",
                        color: "#344054",
                        opacity: 1,
                      }}
                    >
                      Password
                    </Typography>
                    <TextField
                      sx={{ maxWidth: "376px" }}
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </Stack>

                  <Stack>
                    <Typography
                      sx={{
                        mt: "1rem",
                        mb: "0.6rem",
                        font: "normal normal bold 1.6rem Product Sans",
                        letterSpacing: "0px",
                        color: "#344054",
                        opacity: 1,
                      }}
                    >
                      Confirm Password
                    </Typography>
                    <TextField
                      sx={{ maxWidth: "376px" }}
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </Stack>
                  <Button
                    sx={{
                      mt: "2rem",
                      fontSize: "1.4rem",
                      color: "#FFFFFF",
                      maxWidth: "376px",
                      background: "#FE8062 0% 0% no-repeat padding-box",
                      mb : '2rem'
                    }}
                    fullWidth
                    variant="contained"
                  >
                    Sign Up
                  </Button>
                  <Typography sx={{
                        textAlign : 'center',
                        ml : '-8rem',
                        font: "normal normal bold 1.3rem Product Sans",
                        letterSpacing: "0px",
                        color: "#344054",
                        opacity: 1,
                        pb : '3rem'
                  }}>
                  If you have already account please <span style={{color : '#FE8062', textDecoration : 'underline'}}>Sign in</span> 
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              flex: {xs : '0 0 100%' , sm : '0 0 100%' , md : '0 0 60%'},
            }}
          >
            <Box
              component="img"
              src={backgroundImg}
              sx={{
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "64.8rem",
              }}
            ></Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Signup;
