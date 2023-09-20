import { Box,MenuItem, Typography,TextField,TableHead,Paper,TableRow,InputAdornment,Button,Table, TableBody,TableCell,TableContainer,} from "@mui/material";
import React, { Fragment, useState } from "react";
import {  Search } from "@mui/icons-material";
import {tableHeader,tableBodyText,backColor,backText,normalColor,normalText,redBox,yellowBox, eyes, bin, leftArrow, rightArrow, edit,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";



const User = ({adduser}) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.table.data);
  const [rowHandle,setrow] = useState([
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
      value:data?.length,
      label: "all row",
    },
   
  ])
  const [searchData, setesearchData] = useState([]);
  const [activeState, seteactiveState] = useState(0);
  const [howManyRow, sethowManyRow] = useState(data?.length);
 const [inputValue,setInputValue]=useState(null);
  
  const viewHandler = (id) => {
     dispatch(tableActions.setShow('userdetailview'));
     const viewData = data.filter(item => item.id === id);
     dispatch(tableActions.setView(viewData));
  }

  const editHandler = (id) => {
    const editData = data.filter(item => item.id === id);
    
    dispatch(tableActions.setEdit(editData));
    dispatch(tableActions.setShow('adduser'));
    
    
 }
 const deleteHandler = (id) => {
  const updatedData = data.filter(item => item.id !== id);
  dispatch(tableActions.setData(updatedData));
}

const handleInputChange = (event) => {
  const newValue = event.target.value;
  setInputValue(newValue);
  
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(newValue)
  );
  setesearchData(filteredData)
  
};


  return (
    <Fragment>
      <Box
        sx={{
          width: "94%",
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
            maxWidth : {md : '100%',xxs : '86%'}
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
          
            onChange={handleInputChange}
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
          <TableContainer  sx={{ overflow: "auto", maxHeight: {xl : 390 , xxs : 282} , maxWidth : {md : '100%',xxs : '90%'}, margin : '0 auto'}} component={Paper}>
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
                {(searchData?.length ? searchData : data).map((row,index) =>{ 
                  if(index < howManyRow) return(
                  <TableRow
                    key={index}
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
                    </TableCell>
                  </TableRow>
                )})}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* table section end here */}
      </Box>

      {/* select */}

      <Box
        sx={{
          width: "94%",
          margin: "0px auto",
          mt: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth : {md : '100%',xxs : '86%'}
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
              defaultValue={data?.length}
              size="small"
              
            >
              {rowHandle.map((option) => (
                <MenuItem onClick={() => sethowManyRow(option.value)} key={option.value} value={option.value}>
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

          {[0, 1, 2, 3].map((item,index) => {
            return (
              <Box
              key = {index}
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
