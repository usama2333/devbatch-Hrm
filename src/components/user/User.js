import { Box } from "@mui/material";
import React, { Fragment } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tableHeader,tableBodyText } from "./style";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Hassan Farooq",
    "Activated",
    "Development",
    "12-20-2023",
    "12-20-2023",
    "Actions"
  ),
  createData(
    "Hassan Farooq",
    "Deactivated",
    "Design",
    "12-20-2023",
    "12-20-2023",
    "Actions"
  ),
  createData(
    "Hassan Farooq",
    "Activated",
    "IT Network",
    "12-20-2023",
    "12-20-2023",
    "Actions"
  ),
  createData(
    "Hassan Farooq",
    "Activated",
    "Consulting",
    "12-20-2023",
    "12-20-2023",
    "Actions"
  ),
];

const User = () => {
  return (
    <Fragment>
      <Box
        sx={{
          width: "92%",
          height: "379px",
          margin: "0px auto",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          border: "1px solid #EAEAEA",
          borderRadius: "4px",
          opacity: 1,
          mt: "5.9rem",
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{background: '#F3F3F3 0% 0% no-repeat padding-box'}}>
                  <TableCell
                    sx={tableHeader}
                  >
                    User Name
                  </TableCell>
                  <TableCell sx={tableHeader} align="left">Status</TableCell>
                  <TableCell sx={tableHeader} align="left">Department</TableCell>
                  <TableCell sx={tableHeader} align="left">Date Created</TableCell>
                  <TableCell sx={tableHeader} align="left">Deactivated Date</TableCell>
                  <TableCell sx={tableHeader} align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell sx={{tableBodyText}} component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell sx={{tableBodyText}} align="left">{row.calories}</TableCell>
                    <TableCell sx={{tableBodyText}} align="left">{row.fat}</TableCell>
                    <TableCell sx={{tableBodyText}} align="left">{row.carbs}</TableCell>
                    <TableCell sx={{tableBodyText}} align="left">{row.protein}</TableCell>
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

export default User;
