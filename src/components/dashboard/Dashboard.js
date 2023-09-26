import { Box, Stack, Typography } from "@mui/material";
import React, { Fragment, useState, useEffect } from "react";
import Department from "../department/Department";
import graph from "../../assests/images/graph.png";
import {
  addNewBox,calanderMain,depart,firstFlex,graphFlex,graphStack,nameTypo,
  recentFlex, recentTypo,recentUserBox, secondFlex,userGeneral,userImSx,welcome,
} from "./style";
import AddNew from "../newsuer/AddNew";
import RecentTable from "../recent/RecentTable";
import { useSelector } from "react-redux";
import DateRange from "../datepicker/DateRange";
import red from "../../assests/images/blue.png";
import blue from "../../assests/images/red.png";

const Dashboard = () => {
  const data = useSelector((state) => state.table.data);
  const [lastdata, setLastdata] = useState([]);

  useEffect(() => {
    setLastdata(data[data.length - 1]);
  }, [data]);
 
  const uniqueNames = (data) => {
    
    const uniqueNameSet = new Set();
    
    // Use filter to create a new array with unique names
    const uniqueData = data.filter((item) => {
      if (!uniqueNameSet.has(item.department)) {
        uniqueNameSet.add(item.department); // Add the name to the Set if it's not already there
        return true; // Include this item in the filtered array
      }
      return false; // Skip this item because it has a duplicate name
    });
    
    return uniqueData;
  };
  
  const result = uniqueNames(data);
  

  const depart = [
    {
      img: blue,
      name: "No of Users",
      user: data.length,
    },
    {
      img: red,
      name: "Departmnet",
      user: result.length,
    },
  ];

  return (
    <Fragment>
      <Box sx={{ padding: {xxs : '0 1rem' , xs : '0 2rem', sm : '0 4rem'} }}>
        <Box>
          <Stack
            direction={{ xxs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ mt: {xxs : '0rem' , xs : '1rem', sm : '4rem'},mb : {xs : '0.5rem'} }}>
              <Typography sx={welcome}>Welcome</Typography>
              <Typography sx={nameTypo}>{lastdata.name}</Typography>
            </Box>

            <Box sx={calanderMain}>
              <Stack direction="row">
                <DateRange />
              </Stack>
            </Box>
          </Stack>
        </Box>

        {/* start depart section here */}

        <Box sx={{ mt: "2rem" }}>
          <Box sx={firstFlex}>
            <Box sx={secondFlex}>
              {depart.map((data, index) => (
                <Department
                  
                  key={index}
                  img={data.img}
                  name={data.name}
                  user={data.user}
                  data = {data}
                />
              ))}
            </Box>

            <Box sx={addNewBox}>
              <AddNew />
            </Box>
          </Box>
        </Box>

        {/* end department section here */}

        {/* Start graph section */}

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          gap={{xxs : '0rem',xs : '1rem', sm : '3rem'}}
          sx={graphStack}
        >
          <Box sx={graphFlex}>
            <Typography sx={userGeneral}>Users (General)</Typography>
            <Box component="img" sx={userImSx} src={graph}></Box>
          </Box>
          <Box sx={recentFlex}>
            <Typography sx={recentTypo}>Recent Users</Typography>
            <Box sx={recentUserBox}>
              <RecentTable data={data} />
            </Box>
          </Box>
        </Stack>

        {/* end graph section */}
      </Box>
    </Fragment>
  );
};

export default Dashboard;
