import { Box, Container, Stack, Typography,TextField,Button } from "@mui/material";
import React, { Fragment} from "react";
import backgroundImg from "../../assests/images/loginBack.png";


import {
  absBox,
  alreadyAccount,
  conBox,
  createBox,
  emailBox,
  emailTypo,
  firstBox,
  imgBox,
  secondHaf,
  signUpBtn,
  signUpTypo,
} from "./style";
import { useFormik } from "formik";
import { resetSchema } from "../../schema/reset";
import { useNavigate } from "react-router-dom";


const initialValues = {
  email: "",
  password: "",
  newpassword: "",
  confirmpassword: "",
};

const Signup = () => {
  const navigate = useNavigate();
  
 

  const signinHandler = () => {
    navigate('/login')
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: resetSchema,
      onSubmit: (values, action) => {
        navigate('/login')
      },
    });
  return (
    <Fragment>
      <Container disableGutters maxWidth="custom" sx={conBox}>
        <Stack direction="row">
          <Box sx={firstBox}>
            <Box sx={absBox}>
              <Box>
                <Typography sx={signUpTypo}>Reset Password</Typography>
                <Typography sx={createBox}>
                  Please fill your detail to reset your password.
                </Typography>

                <Box sx={emailBox}>
                  <form onSubmit={handleSubmit}>
                    <Stack>
                      <Typography style={{
                          color:
                            errors.email && touched.email ? "red" : "#344054",
                        }} sx={emailTypo}>
                      Email
                      {errors.email && touched.email ? (
                          <span style={{ color: "red" }}>&nbsp;*</span>
                        ) : null}
                      
                      </Typography>

                      <TextField
                        sx={{ maxWidth: "376px" }}
                        variant="outlined"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                     
                    </Stack>

                    <Stack>
                      <Typography style={{
                          color:
                            errors.password && touched.password ? "red" : "#344054",
                        }} sx={emailTypo}>
                        Password
                        {errors.password && touched.password ? (
                          <span style={{ color: "red" }}>&nbsp;*</span>
                        ) : null}
                        </Typography>
                      <TextField
                        sx={{ maxWidth: "376px" }}
                        variant="outlined"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      
                    </Stack>

                    <Stack>
                      <Typography style={{
                          color:
                            errors.newpassword && touched.newpassword ? "red" : "#344054",
                        }} sx={emailTypo}>
                        New Password
                        {errors.newpassword && touched.newpassword ? (
                          <span style={{ color: "red" }}>&nbsp;*</span>
                        ) : null}
                        </Typography>
                      <TextField
                        sx={{ maxWidth: "376px" }}
                        variant="outlined"
                        type="password"
                        id="newpassword"
                        name="newpassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.newpassword}
                      />
                     
                    </Stack>

                    <Stack>
                      <Typography  style={{
                          color:
                            errors.confirmpassword && touched.confirmpassword ? "red" : "#344054",
                        }} sx={emailTypo}>
                        Confirm Password
                        {errors.confirmpassword && touched.confirmpassword ? (
                          <span style={{ color: "red" }}>&nbsp;*</span>
                        ) : null}
                        </Typography>
                      <TextField
                        sx={{ maxWidth: "376px" }}
                        variant="outlined"
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmpassword}
                      />
                     
                    </Stack>
                    <Button
                      type="submit"
                      sx={signUpBtn}
                      fullWidth
                      variant="contained"
      
                    >
                      Reset Password
                    </Button>
                  </form>
                  <Typography sx={alreadyAccount}>
                    If you have already account please?{" "}
                    <span
                      onClick={signinHandler}
                      style={{
                        color: "#FE8062",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
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
