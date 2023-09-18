import { Box, Stack, Typography } from "@mui/material";
import React, { Fragment, useState,useLayoutEffect, useEffect  } from "react";
import Department from "../department/Department";
import graph from '../../assests/images/graph.png';
import {
  calanderMain,
  depart,
  graphFlex,
  graphStack,
  nameTypo,
  recentFlex,
  recentTypo,
  recentUserBox,
  userGeneral,
  welcome,
} from "./style";
import AddNew from "../newsuer/AddNew";
import DatePick from "../datepicker/DatePick";
import RecentTable from "../recent/RecentTable";
import {  useSelector } from "react-redux";
import { ChartComponent } from "./components/Chart";


const Dashboard = () => {

  const check = useSelector((state) => state.table.check);
  const data = useSelector((state) => state.table.data);
  const [lastdata,setLastdata] = useState([]);

  useEffect(()=> {
    setLastdata(data[data.length - 1]);
    
  },[data])


  return (

    <Fragment>
    <Box sx={{padding : '0px 4rem'}}>
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
          gap : '3rem',
          // flex : '0 0 50%',
          flex: 'calc((100% - 3rem) / 2)',
          flexDirection : {xxs : 'column-reverse' , md : 'row'},
         
        }}
         
        >
          <Box
            sx={{
              display :'flex',
              // flex: "0 0 50%",
          flex: 'calc((100% - 3rem) / 2)',

              flexDirection : 'row',
              gap : '3rem'
              
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
              flex: "0 0 50%",
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
        gap = '3rem'
        // justifyContent="center"
        // alignItems="center"
        
        sx={graphStack}
      >
        <Box sx={graphFlex}>
          <Typography sx={userGeneral}>Users (General)</Typography>
          <Box component='img' sx={{
            
              width : { lg: check === true ? '54rem' : '48rem' , xs: "100%",xxs: "100%" },
               height : '25rem',
               transition: 'all 0.3s ease-in-out',
          }} src={graph}></Box>

          {/* <Box sx={{
            width : '90%',
            // width: { lg: check === true ? '54.5rem' : '49.5rem' , xs: "100%",xxs: "100%" },
            height: "25rem",
            transition: 'all 0.3s ease-in-out',
          }}>
        <ChartComponent/>
        </Box> */}
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
      </Box>
    </Fragment>
  );
};

export default Dashboard;
