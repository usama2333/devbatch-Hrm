import React, { Fragment } from "react";
import icon from "../../assests/images/icon.png";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  addEmail,
  adduser,
  adduserBox,
  adduserInner,
 
} from "./style";
import TextField from "@mui/material/TextField";
const AddNew = () => {
  return (
    <Fragment>
      <Box sx={adduserBox}>
        <Box sx={adduserInner}>
          <Typography sx={adduser}>Add New Users</Typography>
          <Typography sx={addEmail}>
            Add an Email & send the magic link to users.
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              sx={{
                display: "flex",
                flex: "0 0 60%",
              }}
            >
              <TextField
                sx={{
                  background: "#FFFFFF 0% 0% no-repeat border-box",
                  mt: "0.7rem",
                  // border: "1px solid #EAEAEA",
                  borderRadius: "6px",
                  font: {
                    xxs: "normal normal normal 12px/15px Product Sans",
                    xs: "normal normal normal 12px/15px Product Sans",
                    sm: "normal normal normal 14px/17px Product Sans",
                  },
                  letterSpacing: "0px",
                  color: "#707787",
                }}
                fullWidth
                size="small"
                id="outlined-basic"
                autoComplete="off"
                placeholder="hassan@gmail.com"
                variant="outlined"
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flex: "0 0 30%",
                justifyContent : 'space-evenly',
                mt: "0.7rem",
                mr: "2rem",
              }}
            >
              <Button
                sx={{
                  background: "#FFFFFF 0% 0% no-repeat padding-box",
                  font: "normal normal normal 12px/14px Product Sans",
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "#e0cc9f", // Define the hover effect style
                  },
                  padding: "0.75rem 3rem",
                  font: "normal normal normal 13px/15px Product Sans",
                  letterSpacing: "0px",
                  color: "#707787",
                }}
                variant="contained"
              >
              <Box sx={{display : 'flex', alignItems : 'center' }}>
              
              <Typography sx={{display : {xxs : 'none', sm : 'flex',}}}>Send Link</Typography>
              <Box component="img" sx={{ml : '2rem'}} src={icon}></Box>
              </Box>
              
              </Button>
            </Box>

          </Stack>
        </Box>
      </Box>
    </Fragment>
  );
};

export default AddNew;
