import { Box, Container, Stack, Typography,TextField,Button,Checkbox } from "@mui/material";
import React, { Fragment,useState,useLayoutEffect,useEffect,useContext } from "react";
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
} from "./style";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../schema/login";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import signUpData from "../../api/signupForm";
import AuthContext from "../../store/auth-context";

const initialValues = {
  email: "",
  password: "",
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const navigate = useNavigate();
  const [testHistory, setTestHistory] = useState(null);
  const login = useSelector((state) => state.table.login);
  const authCtx =  useContext(AuthContext);
  const signup = useSelector((state) => state.table.signup);
  
  const dispatch = useDispatch();
  
  const signupHandler = () => {
    // history.push("/");
    navigate('/')
  };

  useLayoutEffect(() => {
    dispatch(tableActions.setLogin(true));
    
  },[dispatch]);
 
 const handleHistory = () => {
  
 }

 useEffect(() => {

 },[])

  console.log(signup,'in login component data')
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        console.log(values, "data....................");
        // dispatch(tableActions.setLogin(true));
       
        signUpData(values,authCtx,login,navigate);
        // if(testHistory === true) {
        //    history.push('/home');
        // }else {
        //   history.push('/login');
        // }
        // history.push('/home');
        // dispatch(tableActions.setSignup(values));
        
      
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

                      <Typography onClick={() => navigate('/reset')} sx={forgotBox}>Forgot password?</Typography>
                    </Stack>

                    <Button
                      type="submit"
                      sx={signInBox}
                      fullWidth
                      variant="contained"
                     onClick = {handleHistory}
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
