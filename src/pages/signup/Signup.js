import { Box, Container, Stack, Typography,TextField,Button } from "@mui/material";
import React, { Fragment,useContext,useLayoutEffect } from "react";
import backgroundImg from "../../assests/images/loginBack.png";
import AuthContext from "../../store/auth-context";

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
import { signupSchema } from "../../schema/signup";
import { tableActions } from "../../store/table";
import { useDispatch, useSelector } from "react-redux";
import signUpData from "../../api/signupForm";
import { useNavigate } from "react-router-dom";


const initialValues = {
  email: "",
  name: "",
  password: "",
  confirmpassword: "",
};

const Signup = () => {
  const login = useSelector((state) => state.table.login);
  const authCtx =  useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const signinHandler = () => {
    navigate('/login')
  };
  useLayoutEffect(() => {
    dispatch(tableActions.setLogin(false));
  },);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        signUpData(values,authCtx,login,navigate);
        
        dispatch(tableActions.setSignup(values));

       
      },
    });
  return (
    <Fragment>
      <Container disableGutters maxWidth="custom" sx={conBox}>
        <Stack direction="row">
          <Box sx={firstBox}>
            <Box sx={absBox}>
              <Box>
                <Typography sx={signUpTypo}>sign up</Typography>
                <Typography sx={createBox}>
                  Please fill your detail to create your account.
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
                        // size="small"
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
                            errors.name && touched.name ? "red" : "#344054",
                        }} sx={emailTypo}>
                        Name
                        {errors.name && touched.name ? (
                          <span style={{ color: "red" }}>&nbsp;*</span>
                        ) : null}
                        </Typography>
                      <TextField
                        sx={{ maxWidth: "376px" }}
                        variant="outlined"
                        id="name"
                        // size="small"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
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
                        type="password"
                        // size="small"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
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
                        // size="small"
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
                      Sign Up
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
