import { Box, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import red from "../../assests/images/blue.png";
import blue from "../../assests/images/red.png";

const Department = ({img , name , user}) => {
  return (
    <Fragment>
      <Box
        sx={{
          width: "24rem",
          height: "111px",
          background: "#FCFCFC 0% 0% no-repeat padding-box",
          borderRadius: "10px",
          opacity: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            pt: "1.3rem",
            pl: "1.3rem",
          }}
        >
          <Box
            component="img"
            src={img}
            sx={{ height: "1.4rem", width: "1.4rem" }}
          ></Box>
          <Typography
            sx={{
              font: "normal normal bold 18px/22px Product Sans",
              letterSpacing: "0px",

              color: "#FE8062",
              opacity: 1,
              ml: "0.7rem",
            }}
          >
            {name}
          </Typography>
        </Box>
        <Typography
          sx={{
            font: "normal normal bold 21px/25px Product Sans",
            letterSpacing: "0px",

            color: "#707787",
            opacity: 1,
            mt: '1.7rem',
            ml : '3.4rem'
          }}
        >
          {user}
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Department;
