import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { stackSx, userName, userRecent } from "./style";

const Recents = ({ name, depart, date }) => {
  return (
    <Fragment>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={stackSx}
      >
        <Typography sx={userName}>{name}</Typography>
        <Typography sx={userRecent}>{depart}</Typography>
        <Typography sx={userRecent}>{date}</Typography>
      </Stack>
    </Fragment>
  );
};

export default Recents;
