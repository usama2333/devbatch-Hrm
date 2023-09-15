import { Box, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import red from "../../assests/images/blue.png";
import blue from "../../assests/images/red.png";
import { departBox, departInnerBox, nameBox, userBox } from "./style";

const Department = ({ key,img, name, user }) => {
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
