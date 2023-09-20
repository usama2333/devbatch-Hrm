import React, { Fragment } from "react";
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
            gap="2rem"
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
              />
            </Box>

            <Box sx={secondUserFlex}>
              <Button sx={sendLinkBtn} variant="contained">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ display: { xxs: "none", sm: "flex" } }}>
                    Send Link
                  </Typography>
                  <Box component="img" sx={{ ml: "1rem" }} src={icon}></Box>
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
