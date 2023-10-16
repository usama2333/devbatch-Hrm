import { Box, Container, Stack, Typography,TextField,Button } from "@mui/material";
import React, { Fragment , useState, useEffect} from "react";
import backgroundImg from "../../assests/images/loginBack.png";

import {
  absBox,
  alreadyAccount,
  conBox,
  createBox,
  emailBox,
  emailTypo,
  firstBox,
  formMainCon,
  imgBox,
  secondHaf,
  signUpBtn,
  signUpTypo,
} from "./style";
import { useFormik } from "formik";
import { tableActions } from "../../store/table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetSchema } from "../../schema/reset";
import resetApi from "../../api/resetApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";






const notify = (error) => toast(error);

const Reset = () => {
  const [countdown, setCountdown] = useState(15);
  const otp = useSelector((state) => state.table.otp);
  console.log(otp , 'test api ...................')
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  console.log(otp.data.email,'email.............')

  const initialValues = {
    email: otp?.data?.email ?  otp?.data?.email : "",
    otp: "",
    newpassword: "",
    confirmpassword: "",
  };
  const signinHandler = () => {
    navigate('/login')
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, [countdown]);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: resetSchema,
      onSubmit: (values, action) => {
        console.log(values, 'reset values in the form ')
        resetApi(values,navigate,notify,dispatch,tableActions)    
      },
    });
  return (
    <Fragment>
      <Container disableGutters maxWidth="custom" sx={conBox}>
        <Stack direction="row" sx={{height : '100vh', overflow : 'hidden'}}>
          <Box sx={firstBox}>
            <Box sx={absBox}>
              <Box sx={formMainCon}>
                <Typography sx={signUpTypo}>Reset Password</Typography>
                <Typography sx={createBox}>
                  Please fill your detail to Reset your account.
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
                       sx={{ width : '100%' }}
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
                      <Typography style={{
                          color:
                            errors.otp && touched.otp ? "red" : "#344054",
                        }} sx={emailTypo}>
                          
                        {`OTP:  ${countdown === 0 ? '' : otp.otp}  ${countdown ? `sec ${countdown}` : ''} `}
                        {errors.otp && touched.otp ? (
                          <span style={{ color: "red" }}>&nbsp;*</span>
                        ) : null}
                        </Typography>
                        <Typography>

                        </Typography>
                      <TextField
                        sx={{ width : '100%' }}
                        variant="outlined"
                        type="password"
                        // size="small"
                        id="otp"
                        name="otp"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.otp}
                        inputProps={{ style: { font: 'normal normal normal 14px/17px Product Sans', boxSizing : 'border-box', padding : '2.3rem 1rem',border: 'none !important',} }}
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
                        sx={{ width : '100%' }}
                        variant="outlined"
                        type="password"
                        // size="small"
                        id="newpassword"
                        name="newpassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.newpassword}
                        inputProps={{ style: { font: 'normal normal normal 14px/17px Product Sans', boxSizing : 'border-box', padding : '2.3rem 1rem',border: 'none !important',} }}
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
                        sx={{ width : '100%' }}
                        variant="outlined"
                        // size="small"
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmpassword}
                        inputProps={{ style: { font: 'normal normal normal 14px/17px Product Sans', boxSizing : 'border-box', padding : '2.3rem 1rem',border: 'none !important',} }}
                      />
                     
                    </Stack>
                    <Button
                      type="submit"
                      sx={signUpBtn}
                      fullWidth
                      variant="contained"
      
                    >
                      Reset
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
      <ToastContainer />
    </Fragment>
  );
};

export default Reset;
