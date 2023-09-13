import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import bell from "../../assests/images/bell.png";
import pie from "../../assests/images/pie.png";
import { Stack } from "@mui/material";
import {bellIconBox,dashboardBox,mainBox,navEmail,navStack,navTypo,pieIcon,} from "./style";

const Navbarr = () => {
  return (
    <Fragment>
      <Box sx={mainBox}>
        <AppBar
          position="static"
          sx={{ background: "inherit", boxShadow: "none" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={dashboardBox}>
              Dashboard
            </Typography>

            <Box component="img" sx={bellIconBox} src={bell}></Box>

            <Stack sx={navStack}>
              <Typography sx={navTypo}>AnnaBell James</Typography>

              <Typography sx={navEmail}>
                annabelljames123@devbatch.com
              </Typography>
            </Stack>

            <Box component="img" sx={pieIcon} src={pie}></Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
};

export default Navbarr;
