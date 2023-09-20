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

const Dashboard = () => {
  const data = useSelector((state) => state.table.data);
  const [lastdata, setLastdata] = useState([]);

  useEffect(() => {
    setLastdata(data[data.length - 1]);
  }, [data]);

  return (
    <Fragment>
      <Box sx={{ padding: "0px 4rem" }}>
        <Box>
          <Stack
            direction={{ xxs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ mt: "4rem",mb : '0.5rem' }}>
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
          gap="3rem"
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
