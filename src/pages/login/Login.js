import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import backgroundImg from "../../assests/images/loginBack.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import {absoluteBox,accountBox,conSx,detailTypo,devBox,emailBox,firstBox,forgotBox,formBox,
  loginTypo,passwordBox, remBox,remTypo,spanBox,secondBox,signInBox,imgBox,
} from "./style";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  return (
    <Fragment>
      <Container disableGutters maxWidth="custom" sx={conSx}>
        <Stack direction="row">
          <Box sx={firstBox}>
            <Box sx={absoluteBox}>
              <Box>
                <Typography sx={loginTypo}>Login</Typography>
                <Typography sx={detailTypo}>
                  Please fill your detail to create your account.
                </Typography>

                <Box sx={formBox}>
                  <Stack>
                    <Typography sx={emailBox}>Email</Typography>

                    <TextField
                      sx={{ maxWidth: "376px" }}
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </Stack>

                  <Stack>
                    <Typography sx={passwordBox}>Password</Typography>
                    <TextField
                      sx={{ maxWidth: "376px" }}
                      id="outlined-basic"
                      variant="outlined"
                      type="password"
                    />
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box sx={remBox}>
                      <Checkbox {...label} label="remember me" />
                      <Typography sx={remTypo}>Remember me</Typography>
                    </Box>

                    <Typography sx={forgotBox}>Forgot password?</Typography>
                  </Stack>

                  <Button sx={signInBox} fullWidth variant="contained">
                    Sign in
                  </Button>
                  <Typography sx={accountBox}>
                    Don't have an account? <span style={spanBox}>Sign up</span>
                  </Typography>
                  <Typography sx={devBox}>Createdby Devbatch</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={secondBox}>
            <Box component="img" src={backgroundImg} sx={imgBox}></Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Login;
