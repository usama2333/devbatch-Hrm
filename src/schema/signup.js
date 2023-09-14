import * as Yup from "yup";

export const signupSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    name: Yup.string().min(2).max(25).required("Please enter your name"), 
    password: Yup.string().min(8).required("Please enter your password"),
    confirmpassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
});