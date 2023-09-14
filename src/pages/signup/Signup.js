import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import backgroundImg from "../../assests/images/loginBack.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../../schema/signup";

const initialValues = {
  email: "",
  name: "",
  password: "",
  confirmpassword: "",
};

const Signup = () => {
  const history = useHistory();
  const signinHandler = () => {
    history.push("/login");
    console.log("sign............");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        console.log(values,'data....................')
        // AddInputData(values, history, notify);
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
                      <Typography sx={emailTypo}>Email</Typography>

                      <TextField
                        sx={{ maxWidth: "376px" }}
                        variant="outlined"
                        size="small"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email ? (
                        <Typography
                          variant="p"
                          color="red"
                          sx={{ fontSize: "14px",  }}
                        >
                          {errors.email}
                        </Typography>
                      ) : null}
                    </Stack>

                    <Stack>
                      <Typography sx={emailTypo}>Name</Typography>
                      <TextField
                        sx={{ maxWidth: "376px" }}
                        variant="outlined"
                        id="name"
                        size="small"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {errors.name && touched.name ? (
                        <Typography
                          variant="p"
                          color="red"
                          sx={{ fontSize: "14px" }}
                        >
                          {errors.name}
                        </Typography>
                      ) : null}
                    </Stack>

                    <Stack>
                      <Typography sx={emailTypo}>Password</Typography>
                      <TextField
                        sx={{ maxWidth: "376px" }}
                        variant="outlined"
                        type="password"
                        size="small"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {errors.password && touched.password ? (
                        <Typography
                          variant="p"
                          color="red"
                          sx={{ fontSize: "14px" }}
                        >
                          {errors.password}
                        </Typography>
                      ) : null}
                    </Stack>

                    <Stack>
                      <Typography sx={emailTypo}>Confirm Password</Typography>
                      <TextField
                        sx={{ maxWidth: "376px" }}
                        variant="outlined"
                        size="small"
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmpassword}
                      />
                      {errors.confirmpassword && touched.confirmpassword ? (
                        <Typography
                          variant="p"
                          color="red"
                          sx={{ fontSize: "14px" }}
                        >
                          {errors.confirmpassword}
                        </Typography>
                      ) : null}
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
