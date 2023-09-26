import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { departBox, departInnerBox, nameBox, userBox } from "./style";

const Department = ({ img, name, user,data }) => {
  return (
    <Fragment>
      <Box sx={departBox} >
        <Box sx={departInnerBox}>
          <Box
            component="img"
            src={img}
            sx={{ height: "1.4rem", width: "1.4rem" }}
          ></Box>
          <Typography sx={nameBox}>{name}</Typography>
        </Box>
        <Typography sx={userBox}>{user}</Typography>
      </Box>
    </Fragment>
  );
};

export default Department;
