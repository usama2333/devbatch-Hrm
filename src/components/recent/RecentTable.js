import React, { Fragment } from "react";
import { Box,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from "@mui/material";
import { userName, userRecent } from "./style";


const RecentTable = ({data}) => {
 
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
