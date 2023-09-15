import { Box, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { EnergySavingsLeafSharp, Search } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  tableHeader,
  tableBodyText,
  backColor,
  backText,
  normalColor,
  normalText,
} from "./style";
import eyes from "../../assests/images/eye.png";
import bin from "../../assests/images/bin.png";
import edit from "../../assests/images/edit.png";
import leftArrow from "../../assests/images/leftArrow.png";
import rightArrow from "../../assests/images/rightArrow.png";

import MenuItem from "@mui/material/MenuItem";




const redBox = (
  <Box
    sx={{
      background: "#F45744 0% 0% no-repeat padding-box",
      width: "10px",
      height: "10px",
      borderRadius: "100%",
    }}
  ></Box>
);

const yellowBox = (
  <Box
    sx={{
      background: "#a8fe62 0% 0% no-repeat padding-box",
      width: "10px",
      height: "10px",
      borderRadius: "100%",
    }}
  ></Box>
);

const rows = [
  {

  
    name : "Hassan Farooq",
    status:"Activated",
    department : "Development",
    created:"12-20-2023",
    deactive:"12-20-2023",
    actions:"Actions",
    time:"10:10AM"
  },
 { 

 
  name : "Hassan Farooq",
  status:"Dectivated",
  department : "Design",
  created:"12-20-2023",
  deactive:"12-20-2023",
  actions:"Actions",
  time:"10:10AM"
  },
  {

    name : "Hassan Farooq",
    status:"Activated",
    department : "IT Network",
    created:"12-20-2023",
    deactive:"12-20-2023",
    actions:"Actions",
    time:"10:10AM"
  },
  {
    name : "Hassan Farooq",
    status:"Activated",
    department : "Consulting",
    created:"12-20-2023",
    deactive:"12-20-2023",
    actions:"Actions",
    time:"10:10AM"
  },
  {
    name : "Hassan Farooq",
    status:"Activated",
    department : "Consulting",
    created:"12-20-2023",
    deactive:"12-20-2023",
    actions:"Actions",
    time:"10:10AM"
  },
  {

  
    name : "Hassan Farooq",
    status:"Activated",
    department : "Development",
    created:"12-20-2023",
    deactive:"12-20-2023",
    actions:"Actions",
    time:"10:10AM"
  },
 { 

 
  name : "Hassan Farooq",
  status:"Dectivated",
  department : "Design",
  created:"12-20-2023",
  deactive:"12-20-2023",
  actions:"Actions",
  time:"10:10AM"
  },
  
];

const checkLength = rows.length;

const rowHandle = [
  {
    value: "1",
    label: "1 row",
  },
  {
    value: "2",
    label: "2 row",
  },
  {
    value: "3",
    label: "3 row",
  },
  {
    value: "4",
    label: "4 row",
  },
  {
    value: `${checkLength}`,
    label: "all row",
  },
 
];
const User = ({adduser}) => {
  const [activeState, seteactiveState] = useState(0);
  const [roww, setRoww] = useState(rows.length);
  const filteredRows = rows.slice(0,roww);
 

  console.log(roww,'count rows')
  return (
    <Fragment>
      <Box
        sx={{
          width: "92%",
          // height: "379px",
          margin: "0px auto",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          border: "1px solid #EAEAEA",
          borderRadius: "4px",
          opacity: 1,
          mt: "5rem",
          pb : '2rem'
        }}
      >
        <Box
          sx={{
            width: "96%",
            margin: "0px auto",
            mt: "2rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            placeholder="search"
            size="small"
            text="search"
            type="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="inherit" fontSize="large" />
                </InputAdornment>
              ),
            }}
          />

          <Button
            sx={{
              background: "#FE8062 0% 0% no-repeat padding-box",
              font: "normal normal normal 12px/14px Product Sans",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#d66145", // Define the hover effect style
              },
            }}
            variant="contained"
            onClick={adduser}
          >
            + &nbsp; Add Users
          </Button>
        </Box>

        {/* table section start here */}
        <Box
          sx={{
            width: "96%",
            margin: "0px auto",
            mt: "2rem",
          }}
        >
          <TableContainer  sx={{ overflowX: "auto", maxHeight: 282 }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{ background: "#F3F3F3 0% 0% no-repeat padding-box" }}
                >
                  <TableCell sx={tableHeader}>User Name</TableCell>
                  <TableCell sx={tableHeader} align="left">
                    Status
                  </TableCell>
                  <TableCell sx={tableHeader} align="left">
                    Department
                  </TableCell>
                  <TableCell sx={tableHeader} align="left">
                    Date Created
                  </TableCell>
                  <TableCell sx={tableHeader} align="left">
                    Deactivated Date
                  </TableCell>
                  <TableCell sx={tableHeader} align="left">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      sx={{ tableBodyText }}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>

                    <TableCell sx={{ tableBodyText }} align="left">
                      <Box sx={{ display: "flex" }}>
                        <Box sx={{ mr: "0.8rem" }}>
                          {row.status === "Activated" ? yellowBox : redBox}
                        </Box>
                        <Box>{row.status}</Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ tableBodyText }} align="left">
                      {row.department}
                    </TableCell>
                    <TableCell sx={{ tableBodyText }} align="left">
                      <Box>{row.created}</Box>
                      <Box>{row.time}</Box>
                    </TableCell>
                    <TableCell sx={{ tableBodyText }} align="left">
                      <Box>{row.deactive}</Box>
                      <Box>{row.time}</Box>
                    </TableCell>
                    <TableCell sx={{ tableBodyText }} align="left">
                      <Box
                        component="img"
                        src={eyes}
                        sx={{ mr: "0.7rem", cursor: "pointer" }}
                      ></Box>
                      <Box
                        component="img"
                        src={edit}
                        sx={{ mr: "0.7rem", cursor: "pointer" }}
                      ></Box>
                      <Box
                        component="img"
                        src={bin}
                        sx={{ cursor: "pointer" }}
                      ></Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* table section end here */}
      </Box>

      {/* select */}

      <Box
        sx={{
          width: "93%",
          margin: "0px auto",
          mt: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // pb :'6.9rem'
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-select-currency"
              select
              defaultValue="4"
              size="small"
              
            >
              {rowHandle.map((option) => (
                <MenuItem onClick={() => setRoww(option.value)} key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ width: "2.5rem", height: "2.5rem", mr: "1rem" }}
            component="img"
            src={leftArrow}
          ></Box>

          {[0, 1, 2, 3].map((item) => {
            return (
              <Box
                onClick={() => seteactiveState(item)}
                sx={item === activeState ? backColor : normalColor}
              >
                <Typography
                  sx={item === activeState ? backText : normalText}
                >{`0${item + 1}`}</Typography>
              </Box>
            );
          })}

          <Box
            sx={{ width: "2.5rem", height: "2.5rem", ml: "1rem" }}
            component="img"
            src={rightArrow}
          ></Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default User;
