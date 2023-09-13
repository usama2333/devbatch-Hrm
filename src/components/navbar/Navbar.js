import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import bell from '../../assests/images/bell.png';
import pie from '../../assests/images/pie.png';
import { Stack } from "@mui/material";

const Navbarr = () => {
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 , ml :'2rem', mt : '2rem'}}>
        <AppBar position="static" sx={{background : 'inherit', boxShadow : 'none'}}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                font: "normal normal bold 25px/30px Product Sans",
                letterSpacing: "0.78px",
                color: "#222222",
                textTransform: "uppercase",
                opacity: 1,
              }}
            >
              Dashboard
            </Typography>
          
            <Box component='img' src={bell}></Box>
           
            <Stack sx={{
                ml : '1.5rem',
                mr : '1.3rem'
            }}>
                <Typography sx={{
                     font: "normal normal normal 14px/20px Product Sans",
                    letterSpacing: "0px",
                    color: "#0E1B42",
                    opacity: 1,
                    textAlign : 'right'
                }}>
                AnnaBell James
                </Typography>
                
                <Typography sx={{
                     font: "normal normal normal 10px/20px Product Sans",
                    letterSpacing: "0px",
                    color: "#707787",
                    opacity: 1,
                }}>
                annabelljames123@devbatch.com
                </Typography>
            </Stack>

            <Box component='img' src={pie}></Box>
           
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
};

export default Navbarr;
