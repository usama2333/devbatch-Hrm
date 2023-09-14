import { Box, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import TextField from "@mui/material/TextField";
import { inputTextStyle } from "./style";
import SwitchButton from "../switch/SwitchButton";
import Button from "@mui/material/Button";
import dummy from "../../assests/images/dummy.png";
import cancel from "../../assests/images/cancel.png";
import download from "../../assests/images/download.png";
import UploadIcon from "@mui/icons-material/Upload";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AddUser = () => {
  const [department, setDepartment] = useState("Select your department");
  const [gender, setGender] = useState("Male");
  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

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

        <form>
          <Box
            sx={{
              display: "flex",
              mt: "0.5rem",
            }}
          >
            <Box sx={{ flex: "0 0 49%", pr: "2rem" }}>
              <Typography sx={inputTextStyle}>Name</Typography>
              <TextField
                id="outlined-basic"
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter your name"
                autoComplete="off"
              />

              <Typography sx={inputTextStyle}>Email</Typography>
              <TextField
                id="outlined-basic"
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter your email"
                autoComplete="off"
              />

              <Typography sx={inputTextStyle}>Designation</Typography>
              <TextField
                id="outlined-basic"
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Add your designation"
                autoComplete="off"
              />

              <InputLabel sx={inputTextStyle} id="department">
                Department
              </InputLabel>
              <Select
                labelId="department"
                fullWidth
                // placeholder="Select a department"
                size="small"
                id="department"
                value={department}
                onChange={handleChangeDepartment}
              >
                <MenuItem value={10}>IT</MenuItem>
                <MenuItem value={20}>Computer Science</MenuItem>
                <MenuItem value={30}>Engeeniring</MenuItem>
              </Select>

              <InputLabel sx={inputTextStyle} id="gender">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                fullWidth
                // placeholder="Select a department"
                size="small"
                id="gender"
                value={gender}
                onChange={handleChangeGender}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female Science</MenuItem>
                <MenuItem value={30}>other</MenuItem>
              </Select>
            </Box>

            <Box sx={{ flex: "0 0 49%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  pr: "3rem",
                }}
              >
                <Typography sx={inputTextStyle}>Upload Image</Typography>
                <Box
                  sx={{
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    border: "1px solid #D0D5DD",
                    borderRadius: "10px",
                    height: "130px",
                    width: "130px",
                    mt: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // ml : '4rem'
                  }}
                >
                  <Box component="img" src={dummy}></Box>
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
                    sx={{
                      background: "#FE8062 0% 0% no-repeat padding-box",
                      "&:hover": {
                        backgroundColor: "#d66145",
                      },
                    }}
                    variant="contained"
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
                          ml: "0.8rem",
                        }}
                      >
                        Upload
                      </Typography>
                    </Box>
                  </Button>
                </Box>
                <Box
                  component="img"
                  src={cancel}
                  sx={{ height: "22px", width: "22px", mt: "1rem" }}
                ></Box>
              </Box>

              <Typography sx={inputTextStyle}>Phone No</Typography>
              <TextField
                id="outlined-basic"
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter your phone"
                autoComplete="off"
              />

              <Typography sx={inputTextStyle}>CNIC</Typography>
              <TextField
                id="outlined-basic"
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter your CNIC"
                autoComplete="off"
              />

              <Typography sx={inputTextStyle}>Address</Typography>
              <TextField
                id="outlined-basic"
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter your address"
                autoComplete="off"
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

            <Box>
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
          >
            Create
          </Button>
        </form>
      </Box>
    </Fragment>
  );
};

export default AddUser;
