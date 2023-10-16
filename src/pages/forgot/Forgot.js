import { Box, Container, Stack, Typography,TextField,Button } from "@mui/material";
import React, { Fragment } from "react";
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
import { forgotSchema } from "../../schema/forgot";
import forgotApi from "../../api/forgotApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  email: "",
 
};

const notify = (error) => toast(error);
const Forgot = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const signinHandler = () => {
    navigate('/login')
  };


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: forgotSchema,
      onSubmit: (values, action) => {
        forgotApi(values,navigate,notify,dispatch,tableActions)
       
      },
    });
  return (
    <Fragment>
      <Container disableGutters maxWidth="custom" sx={conBox}>
        <Stack direction="row" sx={{height : '100vh', overflow : 'hidden'}}>
          <Box sx={firstBox}>
            <Box sx={absBox}>
              <Box sx={formMainCon}>
                <Typography sx={signUpTypo}>Forgot Password</Typography>
                <Typography sx={createBox}>
                  Please enter your valid email to process.
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

                    <Button
                      type="submit"
                      sx={signUpBtn}
                      fullWidth
                      variant="contained"
      
                    >
                      Generate OTP
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

export default Forgot;
