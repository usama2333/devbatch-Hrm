import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import calander from "../../assests/images/calander.png";
import Department from "../department/Department";
import icon from "../../assests/images/icon.png";
import graph from "../../assests/images/graph.png";
import {addEmail,adduser,adduserBox,adduserInner,calanderMain,dateBox,depart,emailMain,
  graphBox,graphFlex,graphStack,linkBox,linkTypo,nameTypo,recentFlex,recentTypo,recentUserBox,
  recentUserStack, secondMail,userGeneral,userName,userRecent,welcome} from "./style";
import User from "../recent/Recent";

const Dashboard = () => {
  return (
    <Fragment>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ mt: "4rem" }}>
            <Typography sx={welcome}>Welcome</Typography>
            <Typography sx={nameTypo}>Hassan Farooq!</Typography>
          </Box>

          <Box sx={calanderMain}>
            <Stack direction="row">
              <Box component="img" src={calander}></Box>
              <Typography sx={dateBox}>Jul, 28 2022 - Jul, 28 2022</Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* start depart section here */}

      <Box sx={{mt: "2rem"}}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          flexWrap="wrap-reverse"
        >
          {depart.map((data) => (
            <Box>
              <Department img={data.img} name={data.name} user={data.user} />
            </Box>
          ))}

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
        </Stack>
      </Box>

      {/* end department section here */}

      {/* Start graph section */}

      <Stack
        direction="row"
        flexWrap="wrap-reverse"
        justifyContent="center"
        alignItems="center"
        sx={graphStack}
      >
        <Box sx={graphFlex}>
          <Typography sx={userGeneral}>Users (General)</Typography>
          <Box component="img" src={graph} sx={graphBox}></Box>
        </Box>

        <Box sx={recentFlex}>
          <Typography sx={recentTypo}>Recent Users</Typography>
          <Box sx={recentUserBox}>
            <Stack
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              sx={recentUserStack}
            >
              <Typography sx={userName}>User name</Typography>
              <Typography sx={userRecent}>Department</Typography>
              <Typography sx={userRecent}>Timing/Date</Typography>
            </Stack>

            <User />
          </Box>
        </Box>
      </Stack>

      {/* end graph section */}
    </Fragment>
  );
};

export default Dashboard;
