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
import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import {
  tableHeader,
  tableBodyText,
  redBox,
  yellowBox,
  eyes,
  bin,
  customPagination,
  conBox,
  flexBox,
  addUserBtn,
  tableOuterBox,
  tabCon,
} from "./style";
import edit from "../../assests/images/edit.png";
import editt from "../../assests/images/edit.png";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import TablePagination from "@mui/material/TablePagination";
import Alert from "@mui/material/Alert";
import { Link, Outlet } from "react-router-dom";
import viewProfile from "../../assests/images/viewProfile.png";
import allUsersApi from "../../api/allUsersApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import deleteUserApi from "../../api/deleteApi";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px  #000",
  boxShadow: 24,
  p: 5,
  borderRadius : '22px',
  display : 'flex',
  flexDirection : 'column',
  justifyContent : 'center',
  alignItems : 'center',
  margin : '0 auto'
};

const notify = (error) => toast(error);

const User = ({ adduser }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.table.data);
  const show = useSelector((state) => state.table.show);
  const edit = useSelector((state) => state.table.edit);
  const del = useSelector((state) => state.table.del);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [searchData, setesearchData] = useState([]);
  const [howManyRow, sethowManyRow] = useState(data?.length);
  const [inputValue, setInputValue] = useState(null);
  // const [del, setDel] = useState(null);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const viewHandler = (id) => {
    dispatch(tableActions.setShow("userdetailview"));
    const viewData = data.filter((item) => item._id === id);
    console.log(viewData, "View data ................");
    dispatch(tableActions.setView(viewData));
  };

  const editHandler = (id) => {
    const editData = data.filter((item) => item._id === id);
    console.log(editData, "edit data......................");

    dispatch(tableActions.setEdit(editData));
    dispatch(tableActions.setShow("updateuser"));
  };
  const addHandler = () => {
    dispatch(tableActions.setShow("adduser"));
    if (edit.length !== 0) {
      dispatch(tableActions.setEdit([]));
    }
  };
  const deleteHandler = (id) => {
    console.log(id, 'handleer id check,...............')
    handleOpen();
    dispatch(tableActions.setDel(id));
    console.log(del,'test del ..........................')
    // deleteUser()

    // deleteUserApi(id,notify);
    // allUsersApi(notify, dispatch,tableActions);
  };

  const deleteUser = () => {
   
    console.log(del,'delete is ...................')
    deleteUserApi(del,notify,);
  
    handleClose();
    allUsersApi(notify, dispatch,tableActions);
  }

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(newValue)
    );
    setesearchData(filteredData);
  };

  const sortedData = [...data].reverse();

  useLayoutEffect(() => {
    allUsersApi(notify, dispatch, tableActions);
  }, [allUsersApi]);

  useEffect(() => {
  
    console.log(
      "data............................................................"
    );
    //
    dispatch(tableActions.setData(data));
  }, [data,del,allUsersApi]);

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

          <Link to="/adduser" style={{ textDecoration: "none" }}>
            <Button
              sx={addUserBtn}
              variant="contained"
              onClick={() => addHandler()}
            >
              + &nbsp; Add Users
            </Button>
          </Link>
        </Box>

        {/* table section start here */}
        <Box sx={tableOuterBox}>
          {data.length !== 0 || searchData?.length !== 0 ? (
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

                  {(inputValue?.length ? searchData : sortedData)
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
                              {row.name ? row.name : "NA"}
                            </TableCell>

                            <TableCell sx={{ tableBodyText }} align="left">
                              <Box sx={{ display: "flex" }}>
                                <Box sx={{ mr: "0.8rem" }}>
                                  {row.status === "activated"
                                    ? yellowBox
                                    : redBox}
                                </Box>
                                <Box>{row.status ? row.status : "NA"}</Box>
                              </Box>
                            </TableCell>
                            <TableCell sx={{ tableBodyText }} align="left">
                              {row.department ? row.department : "NA"}
                            </TableCell>
                            <TableCell sx={{ tableBodyText }} align="left">
                              <Box>{row.createdAt ? row.createdAt : "NA"}</Box>
                              {/* <Box>{row.time}</Box> */}
                            </TableCell>
                            <TableCell sx={{ tableBodyText }} align="left">
                              <Box>{row.updatedAt ? row.updatedAt : "NA"}</Box>
                              {/* <Box>{row.time}</Box> */}
                            </TableCell>
                            <TableCell sx={{ tableBodyText }} align="left">
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  flexWrap: "nowrap",
                                }}
                              >
                                <Link to="/userdetail">
                                  <Box
                                    component="img"
                                    src={eyes}
                                    sx={{ mr: "0.7rem", cursor: "pointer" }}
                                    onClick={() => viewHandler(row._id)}
                                  ></Box>
                                </Link>
                                <Link to="/adduser">
                                  <Box
                                    component="img"
                                    src={editt}
                                    sx={{ mr: "0.7rem", cursor: "pointer" }}
                                    onClick={() => editHandler(row._id)}
                                  ></Box>
                                </Link>

                                <Link>
                                  <Box
                                    component="img"
                                    src={bin}
                                    sx={{ cursor: "pointer" }}
                                    onClick={() => deleteHandler(row._id)}
                                  ></Box>
                                </Link>
                              </Box>
                            </TableCell>
                          </TableRow>
                        );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Box sx={{ mt: "5rem" }}>
              <Alert severity="warning">
                Data is not found — check it out!
              </Alert>
            </Box>
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
      {/* {show === 'userdetailview' && <Outlet />}
      {show === 'adduser' && <Outlet />} */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure to want to delete?
            </Typography>
            <Box sx={{
              display : 'flex', flexDirection : 'row', gap : 3, mt :'4rem'
            }}>
              <Button onClick={handleClose} variant="contained" color="primary">
                No
              </Button>
              <Button onClick={deleteUser}  variant="contained" color="error">
                Delete
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default User;
