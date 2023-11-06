import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import React, { useContext, useState } from "react";
import emptyUser from "../../assests/images/emptyUser.png";
import cancle from "../../assests/images/cancel.png";
import { useDispatch, useSelector } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import SendIcon from "@mui/icons-material/Send";
import checkInApi from "../../api/checkInApi";
import AuthContext from "../../store/auth-context";
import checkOutApi from "../../api/checkOutApi";
import checkTimeApi from "../../api/checkTimeApi";
import { tableActions } from "../../store/table";
import { format } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  cancleImg,
  checkInOut,
  checkinBox,
  checkinFlex,
  checkoutBox,
  checkoutFlex,
  checkoutName,
  commentTypo,
  conBox,
  conInnerBox,
  dateTypo,
  emptyuserBox,
  emptyuserImg,
  flexBox,
  idTypo,
  imgBox,
  nameTypo,
  styleBox,
  timeoutBox,
} from "./style";

const notify = (error) => toast(error);
const CheckIn = () => {
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const navData = useSelector((state) => state.table.nav);
  const checktime = useSelector((state) => state.table.checktime);
  const checkin = useSelector((state) => state.table.checkin);
  const checkinstatus = useSelector((state) => state.table.checkinstatus);
  const checkoutstatus = useSelector((state) => state.table.checkoutstatus);
  const [initialTime, setInitialTime] = useState(false);

  const checkInHandler = () => {
    checkInApi(
      navData.userData.id,
      authCtx.token,
      setInitialTime,
      dispatch,
      tableActions,
      notify
    );
  };

  const checkOutHandler = () => {
    console.log("check out ");
    checkOutApi(
      navData.userData.id,
      authCtx.token,
      dispatch,
      tableActions,
      notify
    );
    checkTimeApi(navData.userData.id, authCtx.token, dispatch, tableActions);
    setInitialTime(false);
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  const currentDate = new Date();
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const currentTime = currentDate.toLocaleTimeString();

  return (
    <Container maxWidth="xl">
      <Box sx={conBox}>
        <Box sx={conInnerBox}>
          <Box sx={flexBox}>
            <Box component="img" sx={imgBox} src={emptyUser}></Box>
            <Typography sx={nameTypo}>{navData.userData.name}</Typography>
            <Typography sx={idTypo}>DB-808</Typography>

            <Box sx={checkInOut}>
              <Button
                onClick={checkInHandler}
                size="medium"
                variant="contained"
                color="success"
                disabled={checkinstatus}
              >
                Check In
              </Button>
              <Button
                onClick={checkOutHandler}
                size="medium"
                variant="contained"
                color="error"
                disabled={checkoutstatus}
              >
                Check Out
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Modal component */}

      <Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleBox}>
            <Box>
              <Box sx={checkoutFlex}>
                <Typography sx={checkoutName}>
                  {navData.userData.name}
                </Typography>
                <Box
                  onClick={handleClose}
                  sx={cancleImg}
                  component="img"
                  src={cancle}
                ></Box>
              </Box>
              <Typography sx={dateTypo}>
                {currentDate.toLocaleDateString(undefined, dateOptions)}
              </Typography>
              <Typography sx={currentTime}>{currentTime}</Typography>

              <Divider />
              <Box sx={checkinFlex}>
                <Box sx={checkinBox}>
                  <LoginIcon sx={{ color: "white" }} />
                  <Typography sx={{ color: "white", mt: "1rem" }}>
                    {checkin.checkInTime
                      ? format(new Date(checkin.checkInTime), "HH:mm:ss")
                      : "NA"}
                  </Typography>
                  <Typography sx={{ color: "white", mt: "0.5rem" }}>
                    Check In
                  </Typography>
                </Box>
                <Box sx={checkoutBox}>
                  <LogoutIcon sx={{ color: "white" }} />
                  <Typography sx={{ color: "white", mt: "1rem" }}>
                    {checkin.checkOutTime
                      ? format(new Date(checkin.checkOutTime), "HH:mm:ss")
                      : "NA"}
                  </Typography>
                  <Typography sx={{ color: "white", mt: "0.5rem" }}>
                    Check Out
                  </Typography>
                </Box>
                <Box sx={timeoutBox}>
                  <QueryBuilderIcon sx={{ color: "white" }} />
                  <Typography sx={{ color: "white", mt: "1rem" }}>
                    {checktime.slice(0, 22)}
                  </Typography>
                  <Typography sx={{ color: "white", mt: "0.5rem" }}>
                    Working Hours
                  </Typography>
                </Box>
              </Box>
              <Divider />

              <Typography sx={commentTypo}>Comments</Typography>
              <Box sx={emptyuserBox}>
                <Box component="img" src={emptyUser} sx={emptyuserImg}></Box>
                <TextField
                  autoComplete="off"
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SendIcon sx={{ cursor: "pointer" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Modal>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default CheckIn;
