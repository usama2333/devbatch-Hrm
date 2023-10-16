import * as Yup from "yup";

export const forgotSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"), 
});