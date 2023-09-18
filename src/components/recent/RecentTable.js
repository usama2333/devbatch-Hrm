import React, { Fragment,useLayoutEffect } from "react";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { stackSx, userName, userRecent } from "./style";
 import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";


const RecentTable = ({data}) => {
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.table.data);
  useLayoutEffect(()=>{
    
  },[])
  return (
    <Fragment>
      <Box>
        {/* table section start here */}
        <Box
          sx={{
            width: "100%",
            // margin: "0px auto",
            // mt: "2rem",
            
          }}
        >
        
          <TableContainer sx={{ overflowX: "auto", maxHeight: 230 }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{ background: "#F3F3F3 0% 0% no-repeat padding-box" }}
                >
                  <TableCell sx={userName}>User Name</TableCell>
                  <TableCell sx={userName} align="left">Department</TableCell>
                  <TableCell sx={userName} align="left">Timing/Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row,index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell  component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell sx={userRecent} align="left">{row.department}</TableCell>
                    <TableCell align="left">
                      
                      <Box sx={userRecent}>{`${row.time} ${row.created}`}</Box>
                    </TableCell>
                   
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* table section end here */}
      </Box>
    </Fragment>
  );
};

export default RecentTable;
