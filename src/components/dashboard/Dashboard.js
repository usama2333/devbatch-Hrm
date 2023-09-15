import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import Department from "../department/Department";
import graph from "../../assests/images/graph.png";
import {
  calanderMain,
  depart,
  graphBox,
  graphFlex,
  graphStack,
  nameTypo,
  recentFlex,
  recentTypo,
  recentUserBox,
  recentUserStack,
  userGeneral,
  userName,
  userRecent,
  welcome,
} from "./style";
import User from "../recent/Recent";
import AddNew from "../newsuer/AddNew";
import DatePick from "../datepicker/DatePick";
import RecentTable from "../recent/RecentTable";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const check = useSelector((state) => state.table.check);
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
              {/* <Box component="img" src={calander}></Box> */}
              <DatePick />
              {/* <Typography sx={dateBox}>Jul, 28 2022 - Jul, 28 2022</Typography> */}
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* start depart section here */}

      <Box sx={{ mt: "2rem" }}>
        <Box
        sx={{
          display : 'flex',
          flexDirection : {xxs : 'column-reverse' , md : 'row'},
         
        }}
         
        >
          <Box
            sx={{
              display :'flex',
              flex: "0 0 50%",
              flexDirection : 'row',
              
            }}
          >
            {depart.map((data) => (
              <Department
                key={data.name}
                img={data.img}
                name={data.name}
                user={data.user}
              />
            ))}
          </Box>

          <Box
            sx={{
              flex: "0 0 46.5%",
              boxSizing : 'border-box'
              
            }}
          >
            <AddNew />
          </Box>
        </Box>
      </Box>

      {/* end department section here */}

      {/* Start graph section */}

      <Stack
        direction="row"
        flexWrap="wrap-reverse"
        // justifyContent="center"
        // alignItems="center"
        sx={graphStack}
      >
        <Box sx={graphFlex}>
          <Typography sx={userGeneral}>Users (General)</Typography>
          <Box component="img" src={graph} sx={{
            width: { lg: check == true ? '54.5rem' : '49.5rem' , xs: "100%",xxs: "100%" },
            height: "25rem",
            transition: 'all 0.3s ease-in-out',
          }}></Box>
        </Box>

        <Box sx={recentFlex}>
          <Typography sx={recentTypo}>Recent Users</Typography>
          <Box sx={recentUserBox}>
           {/* <Stack
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              sx={recentUserStack}
            >
              <Typography sx={userName}>User name</Typography>
              <Typography sx={userRecent}>Department</Typography>
              <Typography sx={userRecent}>Timing/Date</Typography>
            </Stack> */}
          
            {/* <User />  */}
            <RecentTable/>
          </Box>
        </Box>
      </Stack>

      {/* end graph section */}
    </Fragment>
  );
};

export default Dashboard;
