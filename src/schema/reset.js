import * as Yup from "yup";

export const resetSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"), 
    password: Yup.string().min(8).required("Please enter your password"),
    newpassword: Yup.string().min(8).required("Please enter your password"),
    confirmpassword: Yup.string()
      .required()
      .oneOf([Yup.ref("newpassword"), null], "Password must match"),
});