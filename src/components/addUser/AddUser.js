import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import TextField from "@mui/material/TextField";
import { inputTextStyle } from "./style";
import SwitchButton from "../switch/SwitchButton";
import Button from "@mui/material/Button";

const AddUser = () => {
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

              <Typography sx={inputTextStyle}>Department</Typography>
              <TextField
                id="outlined-basic"
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Select a department"
              />

              <Typography sx={inputTextStyle}>Gender</Typography>
              <TextField
                id="outlined-basic"
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Select Gender"
              />
            </Box>

            <Box sx={{ flex: "0 0 49%" }}>
              <Box sx={{ height: "140px" }}></Box>

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
              pl :'3rem',
              pr : '3rem',
              textTransform : 'capitalize',
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
