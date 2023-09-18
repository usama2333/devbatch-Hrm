import {
  Box,
  Typography,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { Fragment,useEffect, useState } from "react";
import { inputTextStyle, phoneTextStyle } from "./style";
import SwitchButton from "../switch/SwitchButton";
import dummy from "../../assests/images/dummy.png";
import cancel from "../../assests/images/cancel.png";
import UploadIcon from "@mui/icons-material/Upload";
import { useFormik } from "formik";
import { userSchema } from "../../schema/user";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import userProfile from "../../assests/images/viewProfile.png";

const initialValues = {
  name: "",
  email: "",
  designation: "",
  department: "",
  gender: "",
  // image: "",
  phone: "",
  cnic: "",
  address: "",
};

const AddUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.table.data);
  const [checkid, setCheckid] = useState(data.length + 1);
  const [status, setStatus] = useState("Activated");
  const edit = useSelector((state) => state.table.edit);
  const editData = edit;

  const statusHandler = () => {
    setStatus((pre) => (pre === "Activated" ? "Deactivated" : "Activated"));
    console.log(status, "status");
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file , 'fileeeeeeeeeeeeeeeee')
    setSelectedImage(file);
    console.log(selectedImage,'image is ....')
  };
  useEffect(() => {
    // This code will run when selectedImage changes
    console.log(selectedImage, 'image is ....');
  }, [selectedImage]);
  const handleButtonClick = () => {
    // Trigger a click event on the input element with the specified id
    const imageInput = document.getElementById('imageInput');
    if (imageInput) {
      imageInput.click();
    }
  };

  const test = {
    id: checkid,
    status: status,
    created: "12-20-2023",
    deactive: "13-20-2023",
    image: selectedImage ? URL.createObjectURL(selectedImage) : dummy,
    time: "12:20AM",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchema,
      onSubmit: (values, action) => {
        const newData = [{ ...values, ...test }];
        const allData = [...data, ...newData];

        if (editData.length != 0) {
          const updatedData = allData.filter(
            (item) => item.id != editData[0].id
          );
          dispatch(tableActions.setData(updatedData));
          dispatch(tableActions.setShow("user"));
        } else {
          dispatch(tableActions.setData(allData));
          dispatch(tableActions.setShow("user"));
        }
      },
    });
  return (
    <Fragment>
      <Box
        sx={{
          width: "93%",
          // height: "500px",
          margin: "0px auto",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          border: "1px solid #EAEAEA",
          borderRadius: "12px",
          opacity: 1,
          mt: "3rem",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            background: "#F3F3F3 0% 0% no-repeat padding-box",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              font: "normal normal normal 20px/24px Product Sans",
              letterSpacing: "0.6px",
              color: "#222222",
              opacity: 1,
              padding: "1rem",
              pl: "3rem",
            }}
          >
            General Info
          </Typography>
        </Box>

        {/* form section */}

        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              mt: "0.5rem",
            }}
          >
            <Box sx={{ flex: "0 0 49%", pr: "2rem" }}>
              <Typography
                style={{
                  color: errors.name && touched.name ? "red" : "#344054",
                }}
                sx={inputTextStyle}
              >
                Name
                {errors.name && touched.name ? (
                  <span style={{ color: "red" }}>&nbsp;*</span>
                ) : null}
              </Typography>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter your name"
                autoComplete="off"
                id="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name.length ? values.name : edit[0]?.name}
              />

              <Typography
                style={{
                  color: errors.email && touched.email ? "red" : "#344054",
                }}
                sx={inputTextStyle}
              >
                Email
                {errors.email && touched.email ? (
                  <span style={{ color: "red" }}>&nbsp;*</span>
                ) : null}
              </Typography>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter your email"
                autoComplete="off"
                id="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email.length ? values.email : edit[0]?.email}
              />

              <Typography
                style={{
                  color:
                    errors.designation && touched.designation
                      ? "red"
                      : "#344054",
                }}
                sx={inputTextStyle}
              >
                Designation
                {errors.designation && touched.designation ? (
                  <span style={{ color: "red" }}>&nbsp;*</span>
                ) : null}
              </Typography>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Add your designation"
                autoComplete="off"
                id="designation"
                name="designation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={
                  values.designation.length
                    ? values.designation
                    : edit[0]?.designation
                }
              />

              <InputLabel
                style={{
                  color:
                    errors.department && touched.department ? "red" : "#344054",
                }}
                sx={inputTextStyle}
                id="department"
              >
                Department
                {errors.department && touched.department ? (
                  <span style={{ color: "red" }}>&nbsp;*</span>
                ) : null}
              </InputLabel>
              <Select
                labelId="department"
                fullWidth
                size="small"
                id="department"
                name="department"
                onChange={handleChange}
                onBlur={handleBlur}
                value={
                  values.department.length
                    ? values.department
                    : edit[0]?.department
                }
              >
                <MenuItem value={"IT"}>IT</MenuItem>
                <MenuItem value={"Computer Science"}>Computer Science</MenuItem>
                <MenuItem value={"Engineering"}>Engeeniring</MenuItem>
                <MenuItem value={"Medical"}>Medical</MenuItem>
              </Select>

              <InputLabel
                style={{
                  color: errors.gender && touched.gender ? "red" : "#344054",
                }}
                sx={inputTextStyle}
                id="gender"
              >
                Gender
                {errors.gender && touched.gender ? (
                  <span style={{ color: "red" }}>&nbsp;*</span>
                ) : null}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                fullWidth
                size="small"
                id="gender"
                name="gender"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender.length ? values.gender : edit[0]?.gender}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"other"}>other</MenuItem>
              </Select>
            </Box>

            <Box sx={{ flex: "0 0 49%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: { xxs: "wrap", sm: "nowrap" },
                  pr: { sm: "0rem", md: "2rem", lg: "3rem" },
                }}
              >
                <Typography sx={inputTextStyle}>Upload Image</Typography>
                <Box
                  sx={{
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    border: "1px solid #D0D5DD",
                    borderRadius: "10px",
                    height: { sm: "60px", md: "118px", lg: "130px" },
                    width: { sm: "60px", md: "118px", lg: "130px" },
                    mt: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    display: { xxs: "none", sm: "flex" },
                    // ml : '4rem'
                  }}
                >
                {!selectedImage && (
                  <Box
                    component="img"
                    sx={{
                      width: { sm: "40px", md: "70px", lg: "80px" },
                      height: { sm: "30px", md: "60px" },
                    }}
                    src={dummy}
                  ></Box>
                  )}

                   {selectedImage && (
        <Box component="div" display="flex" justifyContent="center" sx={{
           
                    
                  
        }}>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected Image"
            style={{ maxWidth: '100%', maxHeight: '100%',borderRadius : '20px' }}
          />
        </Box>
      )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // ml :'3rem'
                  }}
                >
                  <Button
                   onClick={handleButtonClick}
                    sx={{
                      background: "#FE8062 0% 0% no-repeat padding-box",
                      "&:hover": {
                        backgroundColor: "#d66145",
                      },
                    }}
                    variant="contained"
                    size="small"
                  >
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Box>
                        <UploadIcon />
                      </Box>
                      <Typography
                        sx={{
                          font: "normal normal normal 14px/17px Product Sans",
                          color: "#FFFFFF",
                          textTransform: "capitalize",
                          ml: "0.7rem",
                        }}
                      >
                        Upload
                      </Typography>
                    </Box>
                  </Button>
                  <input
                    type="file"
                    accept="image/*"
                    id="imageInput" // Add an id to the input element
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </Box>
                <Box
                  component="img"
                  src={cancel}
                  sx={{
                    height: "22px",
                    width: "22px",
                    mt: "1rem",
                    cursor: "pointer",
                  }}
                ></Box>
              </Box>

              <Typography
                style={{
                  color: errors.phone && touched.phone ? "red" : "#344054",
                }}
                sx={phoneTextStyle}
              >
                Phone No
                {errors.phone && touched.phone ? (
                  <span style={{ color: "red" }}>&nbsp;*</span>
                ) : null}
              </Typography>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter your phone"
                autoComplete="off"
                id="phone"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone.length ? values.phone : edit[0]?.phone}
              />

              <Typography
                style={{
                  color: errors.cnic && touched.cnic ? "red" : "#344054",
                }}
                sx={inputTextStyle}
              >
                CNIC
                {errors.cnic && touched.cnic ? (
                  <span style={{ color: "red" }}>&nbsp;*</span>
                ) : null}
              </Typography>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter your CNIC"
                autoComplete="off"
                id="cnic"
                name="cnic"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cnic.length ? values.cnic : edit[0]?.cnic}
              />

              <Typography
                style={{
                  color: errors.address && touched.address ? "red" : "#344054",
                }}
                sx={inputTextStyle}
              >
                Address
                {errors.address && touched.address ? (
                  <span style={{ color: "red" }}>&nbsp;*</span>
                ) : null}
              </Typography>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter your address"
                autoComplete="off"
                id="address"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={
                  values.address.length ? values.address : edit[0]?.address
                }
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "1rem",
            }}
          >
            <Typography
              sx={{
                font: "normal normal normal 14px/17px Product Sans",
                letterSpacing: "0px",
                color: "#344054",
                mr: "15rem",
              }}
            >
              Account status
            </Typography>

            <Box onClick={statusHandler}>
              <SwitchButton />
            </Box>
          </Box>
          <Button
            sx={{
              mt: "0rem",
              fontSize: "1.4rem",
              color: "#FFFFFF",
              maxWidth: "376px",
              // padding : '0 1rem',
              pl: "3rem",
              pr: "3rem",
              textTransform: "capitalize",
              background: "#FE8062 0% 0% no-repeat padding-box",
              "&:hover": {
                backgroundColor: "#d66145",
              },
            }}
            variant="contained"
            type="submit"
          >
            Create
          </Button>
        </form>
      </Box>
    </Fragment>
  );
};

export default AddUser;
