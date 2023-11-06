import {
  Box,
  Typography,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import {
  buttonClickSx,
  buttonSx,
  cancel,
  cancelBox,
  createButton,
  dummy,
  dummyImgBox,
  dummyImgFlex,
  dummyImgSx,
  emptyUser,
  formBox,
  infoSx,
  infoSxBox,
  inputTextStyle,
  mainBox,
  phoneTextStyle,
  selectedImgStyle,
  statusBox,
  statusSx,
  uploadTypo,
} from "./style";
import SwitchButton from "../switch/SwitchButton";
import UploadIcon from "@mui/icons-material/Upload";
import { useFormik } from "formik";
import { userSchema } from "../../schema/user";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import newUserApi from "../../api/newUserApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import allUsersApi from "../../api/allUsersApi";
import updateUserApi from "../../api/updateApi";

const notify = (error) => toast(error);

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.table.data);
  const [checkid, setCheckid] = useState(data.length + 1);
  const [status, setStatus] = useState("Activated");
  const edit = useSelector((state) => state.table.edit);
  const editData = edit;
  const navData = useSelector((state) => state.table.nav);
  const token = navData.token;

  const statusHandler = () => {
    setStatus((pre) => (pre === "Activated" ? "Deactivated" : "Activated"));
    console.log(status, "status");
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [editUser, setEditUser] = useState(null);

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

  const initialValues = {
    name: edit[0]?.name ? edit[0]?.name : "",
    email: edit[0]?.email ? edit[0]?.email : "",
    designation: edit[0]?.designation ? edit[0]?.designation : "",
    department: edit[0]?.department ? edit[0]?.department : "",
    gender: edit[0]?.gender ? edit[0]?.gender : "",
    phone: edit[0]?.phone ? edit[0]?.phone : "",
    cnic: edit[0]?.cnic ? edit[0]?.cnic : "",
    address: edit[0]?.address ? edit[0]?.address : "",
    // avatar: 'Dummy'
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchema,
      onSubmit: (values, action) => {
        {
          !edit.length && newUserApi(token, values, navigate, notify);
        }

        {
          edit.length && setEditUser(edit[0]._id);
        }
        {
          edit.length &&
            updateUserApi(
              token,
              values,
              edit[0]._id,
              navigate,
              notify,
              editUser
            );
        }

        allUsersApi(token, notify, dispatch, tableActions);
        dispatch(tableActions.setShow("user"));
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
          <Box sx={formBox}>
            <Box sx={{ flex: "calc((100% - 2rem) / 2)" }}>
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
                // autoComplete="off"
                id="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.name.length ? values.name : edit[0]?.name}
                value={values.name}
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
                // autoComplete="off"
                id="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
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
                // autoComplete="off"
                id="designation"
                name="designation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.designation}
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
                value={values.department}
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
                sx={{
                  "& .MuiInputBase-input": {},
                }}
                labelId="demo-simple-select-label"
                fullWidth
                size="small"
                id="gender"
                name="gender"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"other"}>other</MenuItem>
              </Select>
            </Box>

            <Box sx={{ flex: "calc((100% - 2rem) / 2)" }}>
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
                        style={selectedImgStyle}
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
                // autoComplete="off"
                id="phone"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
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
                // autoComplete="off"
                id="cnic"
                name="cnic"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cnic}
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
                // autoComplete="off"
                id="address"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
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
            {edit.length ? "Update" : "Create"}
          </Button>
        </form>
      </Box>
      <ToastContainer />
    </Fragment>
  );
};

export default AddUser;
