import React, { Fragment, useRef } from "react";
import icon from "../../assests/images/icon.png";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import {
  addEmail,
  adduser,
  adduserBox,
  adduserInner,
  firstUserFlex,
  firstUserTypo,
  secondUserFlex,
  sendLinkBtn,
} from "./style";

const AddNew = () => {
  const inputRef = useRef(null);
  

  const sendEmail = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    console.log(inputRef.current.value,',,,,,,,,,,')

    const emailSubject = inputValue;
    const emailBody = 'https://devbatch-hrm.vercel.app/login';
    const mailtoLink = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open the user's default email client with the pre-populated email
    window.location.href = mailtoLink;
    // inputRef.current.value = ''
  };

  return (
    <Fragment>
      <Box sx={adduserBox}>
        <Box sx={adduserInner}>
          <Typography sx={adduser}>Add New Users</Typography>
          <Typography sx={addEmail}>
            Add an Email & send the magic link to users.
          </Typography>
        <form onSubmit={sendEmail}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={{xxs : '1rem', xs : '2rem'}}
            sx={{ boxSizing: "border-box" }}
          >
            <Box sx={firstUserFlex}>
              <TextField
                sx={firstUserTypo}
                fullWidth
                size="small"
                id="outlined-basic"
                autoComplete="off"
                placeholder="hassan@gmail.com"
                variant="outlined"
                type="search"
                ref={inputRef}
                // value={inputRef}
              />
            </Box>

            <Box sx={secondUserFlex}>
              <Button type="submit" onClick={sendEmail} sx={sendLinkBtn} variant="contained">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{xxs : '0.9rem' , xs : '1rem'}} >
                    Send Link
                  </Typography>
                  <Box component="img" sx={{ ml:{xxs : "0.5rem",xs : '1rem'} }} src={icon}></Box>
                </Box>
              </Button>
            </Box>
          </Stack>
          </form>
        </Box>
      </Box>
    </Fragment>
  );
};

export default AddNew;
