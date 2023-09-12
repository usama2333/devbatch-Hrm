import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import backgroundImg from "../../assests/images/loginBack.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {absBox,alreadyAccount,conBox,createBox,emailBox,emailTypo,firstBox,
  imgBox,secondHaf,signUpBtn,signUpTypo,} from "./style";

const Signup = () => {
  return (
    <Fragment>
      <Container maxWidth="custom" sx={conBox}>
        <Stack direction="row">
          <Box sx={firstBox}>
            <Box sx={absBox}>
              <Box>
                <Typography sx={signUpTypo}>sign up</Typography>
                <Typography sx={createBox}>
                  Please fill your detail to create your account.
                </Typography>

                <Box sx={emailBox}>
                  <Stack>
                    <Typography sx={emailTypo}>Email</Typography>

                    <TextField
                      sx={{ maxWidth: "376px" }}
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </Stack>

                  <Stack>
                    <Typography sx={emailTypo}>Name</Typography>
                    <TextField
                      sx={{ maxWidth: "376px" }}
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </Stack>

                  <Stack>
                    <Typography sx={emailTypo}>Password</Typography>
                    <TextField
                      sx={{ maxWidth: "376px" }}
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </Stack>

                  <Stack>
                    <Typography sx={emailTypo}>Confirm Password</Typography>
                    <TextField
                      sx={{ maxWidth: "376px" }}
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </Stack>
                  <Button sx={signUpBtn} fullWidth variant="contained">
                    Sign Up
                  </Button>
                  <Typography sx={alreadyAccount}>
                    If you have already account please{" "}
                    <span
                      style={{ color: "#FE8062", textDecoration: "underline" }}
                    >
                      Sign in
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={secondHaf}>
            <Box component="img" src={backgroundImg} sx={imgBox}></Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Signup;
