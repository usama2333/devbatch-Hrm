import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment, useState,useLayoutEffect, useEffect  } from "react";
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
import { tableActions } from "../../store/table";
import { ChartComponent } from "./components/Chart";
import NewCalander from "../datepicker/NewCalander";

const Dashboard = () => {
  const dispatch = useDispatch();
  const check = useSelector((state) => state.table.check);
  const data = useSelector((state) => state.table.data);
  const [lastdata,setLastdata] = useState([]);

  useEffect(()=> {
    setLastdata(data[data.length - 1]);
    
  },[data])

  useLayoutEffect(()=>{
    
  },[])
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
            <Typography sx={nameTypo}>{lastdata.name}</Typography>
          </Box>

          <Box sx={calanderMain}>
            <Stack direction="row">
              {/* <Box component="img" src={calander}></Box> */}
              <DatePick />
            {/* <NewCalander/> */}
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
            {depart.map((data,index) => (
              <Department
                key = {index}
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
            <AddNew  />
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
          <Box sx={{
            width: { lg: check == true ? '54.5rem' : '49.5rem' , xs: "100%",xxs: "100%" },
            height: "25rem",
            transition: 'all 0.3s ease-in-out',
          }}>
        <ChartComponent/>
        </Box>
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
            <RecentTable data={data}/>
          </Box>
        </Box>
      </Stack>

      {/* end graph section */}
    </Fragment>
  );
};

export default Dashboard;
