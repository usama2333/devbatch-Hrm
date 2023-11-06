import * as Yup from "yup";

export const resetSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"), 
    otp: Yup.string().matches(/^\d{4}$/, 'OTP must be a 4-digit number').required('OTP is required'),
    newpassword: Yup.string().min(6).required("Please enter your password"),
    confirmpassword: Yup.string()
      .required()
      .oneOf([Yup.ref("newpassword"), null], "Password must match"),
});