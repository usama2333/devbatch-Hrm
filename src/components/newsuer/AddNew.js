import React, { Fragment } from 'react'
import icon from "../../assests/images/icon.png";
import { Box, Stack, Typography } from '@mui/material';
import { addEmail, adduser, adduserBox, adduserInner, emailMain, linkBox, linkTypo, secondMail } from './style';

const AddNew = () => {
  return (
    <Fragment>
    
    <Box sx={adduserBox}>
            <Box sx={adduserInner}>
              <Typography sx={adduser}>Add New Users</Typography>
              <Typography sx={addEmail}>
                Add an Email & send the magic link to users.
              </Typography>

              <Stack direction="row">
                <Box sx={emailMain}>
                  <Typography sx={secondMail}>hassan@gmail.com</Typography>
                </Box>

                <Box sx={linkBox}>
                  <Typography sx={linkTypo}>send link</Typography>
                  <Box component="img" src={icon}></Box>
                </Box>
              </Stack>
            </Box>
          </Box>
      
    </Fragment>
  )
}

export default AddNew
