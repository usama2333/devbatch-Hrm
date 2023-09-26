import {
  Box,
  TextField,
  TableHead,
  Paper,
  TableRow,
  InputAdornment,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { Search } from "@mui/icons-material";
import {
  tableHeader,
  tableBodyText,
  redBox,
  yellowBox,
  eyes,
  bin,
  edit,
  customPagination,
  conBox,
  flexBox,
  addUserBtn,
  tableOuterBox,
  tabCon,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import TablePagination from "@mui/material/TablePagination";


const User = ({ adduser }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.table.data);

  const [searchData, setesearchData] = useState([]);
  const [howManyRow, sethowManyRow] = useState(data?.length);
  const [inputValue, setInputValue] = useState(null);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //

  const viewHandler = (id) => {
    dispatch(tableActions.setShow("userdetailview"));
    const viewData = data.filter((item) => item.id === id);
    dispatch(tableActions.setView(viewData));
  };

  const editHandler = (id) => {
    const editData = data.filter((item) => item.id === id);

    dispatch(tableActions.setEdit(editData));
    dispatch(tableActions.setShow("adduser"));
  };
  const deleteHandler = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    dispatch(tableActions.setData(updatedData));
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(newValue)
    );
    setesearchData(filteredData);
  };


  return (
    <Fragment>
      <Box sx={conBox}>
        <Box sx={flexBox}>
          <TextField
            sx={{
              width: { xxs: "85%", sm: "auto" },
              margin: { xxs: " 0 auto", sm: "0 0" },
            }}
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
            onChange={handleInputChange}
          />

          <Button sx={addUserBtn} variant="contained" onClick={adduser}>
            + &nbsp; Add Users
          </Button>
        </Box>

        {/* table section start here */}
        <Box sx={tableOuterBox}>
        {data.length !==0  || searchData?.length !== 0 ? (
          <TableContainer sx={tabCon} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{ background: "#F3F3F3 0% 0% no-repeat border-box" }}
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
             
                {/* {(searchData?.length ? searchData : itemsToDisplay).map((row, index) => { */}
                {(inputValue?.length ? searchData : data)
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    if (index < howManyRow)
                      return (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                            padding: 0,
                          }}
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
                                {row.status === "Activated"
                                  ? yellowBox
                                  : redBox}
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
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "nowrap",
                              }}
                            >
                              <Box
                                component="img"
                                src={eyes}
                                sx={{ mr: "0.7rem", cursor: "pointer" }}
                                onClick={() => viewHandler(row.id)}
                              ></Box>
                              <Box
                                component="img"
                                src={edit}
                                sx={{ mr: "0.7rem", cursor: "pointer" }}
                                onClick={() => editHandler(row.id)}
                              ></Box>
                              <Box
                                component="img"
                                src={bin}
                                sx={{ cursor: "pointer" }}
                                onClick={() => deleteHandler(row.id)}
                              ></Box>
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
              ) : (
               inputValue ? <Typography>Search data is not found</Typography> : <Typography>Table data is not found</Typography>
             
              )}

      
        </Box>

        {/* table section end here */}
      </Box>

      {/* select */}
      <Box
        sx={{
          width: "98%",
        }}
      >
        <TablePagination
          sx={customPagination}
          rowsPerPageOptions={[2, 4, 5, 10, 50, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Fragment>
  );
};

export default User;
