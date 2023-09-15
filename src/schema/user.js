import * as Yup from "yup";

export const userSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  designation: Yup.string().min(2).max(25).required("Please enter your designation"),
  department: Yup.string().required('Department is required'),
  gender: Yup.string().required('Gender is required'),
//   image: Yup.mixed()
//       .required('Image is required')
//       .test('fileSize', 'File size is too large', (value) => {
//         return value && value.size <= 1024000; // 1MB
//       })
//       .test('fileType', 'Unsupported file format', (value) => {
//         return value && ['image/jpeg', 'image/png'].includes(value.type);
//       }),

  phone: Yup.string().required('Phone number is required')
      .matches(/^\d{10}$/, 'Phone number must be 10 digits'),
  cnic: Yup.string()
      .required('CNIC is required')
      .matches(/^[0-9]{13}$/, 'CNIC must be 13 digits long'),
  address: Yup.string().min(2).max(25).required("Please enter your address"),

 
});