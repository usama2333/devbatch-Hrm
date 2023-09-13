import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { userName, userRecent } from "./style";
import { DateRangeTwoTone } from "@mui/icons-material";

const Users = ({name , depart, date}) => {
  return (
    <Fragment>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{
            border: '1px solid #F3F3F3',
          padding: "0.5rem 0rem",
          boxSizing: "border-box",
          borderRadius: "4px",
          mt : '0.6rem'
        }}
      >
        <Typography sx={userName}>{name}</Typography>
        <Typography sx={userRecent}>{depart}</Typography>
        <Typography sx={userRecent}>{date}</Typography>
      </Stack>
    </Fragment>
  );
};

export default Users;
