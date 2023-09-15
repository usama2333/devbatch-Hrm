import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import backgroundImg from "../../assests/images/loginBack.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import {
  absoluteBox,
  accountBox,
  conSx,
  detailTypo,
  devBox,
  emailBox,
  firstBox,
  forgotBox,
  formBox,
  loginTypo,
  passwordBox,
  remBox,
  remTypo,
  spanBox,
  secondBox,
  signInBox,
  imgBox,
} from "./style";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../schema/login";

const initialValues = {
  email: "",
  password: "",
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const history = useHistory();
  const signupHandler = () => {
    history.push("/");
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        console.log(values, "data....................");
        // AddInputData(values, history, notify);
      },
    });
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
                  <form onSubmit={handleSubmit}>
                    <Stack>
                      <Typography
                        style={{
                          color:
                            errors.email && touched.email ? "red" : "#344054",
                        }}
                        sx={emailBox}
                      >
                        Email
                        {errors.email && touched.email ? (
                          <span style={{ color: "red" }}>&nbsp;*</span>
                        ) : null}
                      </Typography>

                      <TextField
                        sx={{ maxWidth: "376px" }}
                        variant="outlined"
                        // size="small"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                     
                    </Stack>

                    <Stack>
                      <Typography  style={{
                          color:
                            errors.password && touched.password ? "red" : "#344054",
                        }} sx={passwordBox}>
                      Password
                      {errors.password && touched.email ? (
                          <span style={{ color: "red" }}>&nbsp;*</span>
                        ) : null}
                      </Typography>
                      <TextField
                        sx={{ maxWidth: "376px" }}
                        variant="outlined"
                        type="password"
                        // size="small"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
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

                    <Button
                      type="submit"
                      sx={signInBox}
                      fullWidth
                      variant="contained"
                    >
                      Sign in
                    </Button>
                  </form>
                  <Typography sx={accountBox}>
                    Don't have an account?{" "}
                    <span onClick={signupHandler} style={spanBox}>
                      Sign up
                    </span>
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
