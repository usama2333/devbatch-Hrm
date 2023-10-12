import * as Yup from "yup";

export const userSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  designation: Yup.string().min(2).max(25).required("Please enter your designation"),
  department: Yup.string().required('Department is required'),
  gender: Yup.string().required('Gender is required'),
  phone: Yup.string().required('Phone number is required')
      .matches(/^\d{10}$/, 'Phone number must be 10 digits'),
  cnic: Yup.string()
      .required('CNIC is required')
      .matches(/^[0-9]{5}-[0-9]{7}-[0-9]$/, 'CNIC must be in the format XXXXX-XXXXXXX-X'),
  address: Yup.string().min(2).max(25).required("Please enter your address"),
});