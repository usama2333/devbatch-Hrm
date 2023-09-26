import { Box, Container, Stack, Typography,TextField,Button,Checkbox } from "@mui/material";
import React, { Fragment,useLayoutEffect,useContext } from "react";
import backgroundImg from "../../assests/images/loginBack.png";
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
  formMainCon,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../schema/login";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import signUpData from "../../api/signupForm";
import AuthContext from "../../store/auth-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';


const initialValues = {
  email: "",
  password: "",
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const notify = (error) => toast(error);

const Login = () => {
  const navigate = useNavigate();
  const login = useSelector((state) => state.table.login);
  const authCtx =  useContext(AuthContext);

  
  const dispatch = useDispatch();
  
  const signupHandler = () => {
    navigate('/signup')
  };

  useLayoutEffect(() => {
    dispatch(tableActions.setLogin(true));
    
  },[dispatch]);
 

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        signUpData(values,authCtx,login,navigate,notify,Swal);
       
       
      },
    });
  return (
    <Fragment>
      <Container disableGutters maxWidth="custom" sx={conSx}>
        <Stack direction="row" sx={{height : '100vh', overflow : 'hidden'}}>
          <Box sx={firstBox}>
            <Box sx={absoluteBox}>
              <Box sx={formMainCon}>
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
                        sx={{ width : '100%' , boxSizing : 'border-box', fontSize : '22px'}}
                        variant="outlined"
                        // size="small"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        inputProps={{ style: { font: 'normal normal normal 14px/17px Product Sans', boxSizing : 'border-box', padding : '2.3rem 1rem',border: 'none !important',} }}
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
                       sx={{ width : '100%' }}
                        variant="outlined"
                        type="password"
                        // size="small"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        inputProps={{ style: { font: 'normal normal normal 14px/17px Product Sans', boxSizing : 'border-box', padding : '2.3rem 1rem',border: 'none !important',} }}
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

                      <Typography onClick={() => navigate('/reset')} sx={forgotBox}>Forgot password?</Typography>
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
      <ToastContainer />
    </Fragment>
  );
};

export default Login;
