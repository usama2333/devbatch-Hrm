import {Box,Typography, Button,InputLabel,MenuItem,Select,TextField,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import {
  buttonClickSx,buttonSx,cancel,cancelBox,createButton,dummy,dummyImgBox,dummyImgFlex,dummyImgSx,emptyUser,infoSx,
  infoSxBox,inputTextStyle,mainBox,phoneTextStyle,statusBox,statusSx, uploadTypo,
} from "./style";
import SwitchButton from "../switch/SwitchButton";
import UploadIcon from "@mui/icons-material/Upload";
import { useFormik } from "formik";
import { userSchema } from "../../schema/user";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";


const initialValues = {
  name: "",
  email: "",
  designation: "",
  department: "",
  gender: "",
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

    setSelectedImage(file);
  };
  useEffect(() => {}, [selectedImage]);
  const handleButtonClick = () => {
    const imageInput = document.getElementById("imageInput");
    if (imageInput) {
      imageInput.click();
    }
  };

  const test = {
    id: checkid,
    status: status,
    created: "12-20-2023",
    deactive: "13-20-2023",
    image: selectedImage ? URL.createObjectURL(selectedImage) : emptyUser,
    time: "12:20AM",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchema,
      onSubmit: (values, action) => {
        const newData = [{ ...values, ...test }];
        const allData = [...data, ...newData];

        if (editData.length !== 0) {
          const updatedData = allData.filter(
            (item) => item.id !== editData[0].id
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
      <Box sx={mainBox}>
        <Box sx={infoSxBox}>
          <Typography sx={infoSx}>General Info</Typography>
        </Box>

        {/* form section */}

        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection : {xxs : 'column', sm :'row'},
              mt: "0.5rem",
              gap : 2
            }}
          >
            <Box sx={{ flex : 'calc((100% - 2rem) / 2)',}}>
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

            <Box sx={{ flex : 'calc((100% - 2rem) / 2)', }}>
              <Box sx={dummyImgFlex}>
                <Typography sx={inputTextStyle}>Upload Image</Typography>
                <Box sx={dummyImgBox}>
                  {!selectedImage && (
                    <Box component="img" sx={dummyImgSx} src={dummy}></Box>
                  )}

                  {selectedImage && (
                    <Box component="div" display="flex" justifyContent="center">
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Selected Image"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "20px",
                        }}
                      />
                    </Box>
                  )}
                </Box>
                <Box sx={buttonSx}>
                  <Button
                    onClick={handleButtonClick}
                    sx={buttonClickSx}
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
                      <Typography sx={uploadTypo}>Upload</Typography>
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
                  onClick={() => setSelectedImage(null)}
                  component="img"
                  src={cancel}
                  sx={cancelBox}
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

          <Box sx={statusBox}>
            <Typography sx={statusSx}>Account status</Typography>

            <Box onClick={statusHandler}>
              <SwitchButton />
            </Box>
          </Box>
          <Button sx={createButton} variant="contained" type="submit">
            Create
          </Button>
        </form>
      </Box>
    </Fragment>
  );
};

export default AddUser;
