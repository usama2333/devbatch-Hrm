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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: "0px 0px 30px #00000080",
  border: "2px solid #70707066",
  borderRadius: { xxs: "20px", sm: "22px" },
  p: 4,
};

const CheckIn = () => {
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const navData = useSelector((state) => state.table.nav);
  const checktime = useSelector((state) => state.table.checktime);
  const checkin = useSelector((state) => state.table.checkin);
  const [initialTime, setInitialTime] = useState(false);

  console.log(checktime, "check time .................");
  console.log(checkin.checkInTime, "Check in Time in time ..........");
  console.log(checkin.checkOutTime, "Check out Time in time ..........");

  const checkInHandler = () => {
    checkInApi(navData.user.id, authCtx.token);
    setInitialTime(true);
  };

  const checkOutHandler = () => {
    console.log("check out ");
    checkOutApi(navData.user.id, authCtx.token, dispatch, tableActions);
    checkTimeApi(navData.user.id, authCtx.token, dispatch, tableActions);
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
      <Box
        sx={{
          //   maxHeight: "100vh",
          height: "85vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            border: "2px solid gray",
            width: { sm: "50%", md: "38%" },
            // height: "35rem",
            margin: "0 auto",
            boxShadow: "0px 0px 10px #00000080",
            border: "2px solid #70707066",
            borderRadius: { xxs: "20px", sm: "32px" },
            padding: { xxs: "2rem", xs: "3rem", sm: "4rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              component="img"
              sx={{
                width: { xxs: "9rem", xs: "10rem", sm: "11rem" },
                height: { xxs: "9rem", xs: "10rem", sm: "11rem" },
                objectFit: "contain",
              }}
              src={emptyUser}
            ></Box>
            <Typography
              sx={{
                font: {
                  xxs: "normal normal bold 16px/18px Product Sans",
                  xx: "normal normal bold 20px/22px Product Sans",
                  sm: "normal normal bold 22px/24px Product Sans",
                },
                letterSpacing: "0.9px",
                color: "#344054",
                pt: "2rem",
              }}
            >
              {navData.user.name}
            </Typography>
            <Typography
              sx={{
                font: {
                  xxs: "normal normal bold 14px/16px Product Sans",
                  xx: "normal normal bold 18px/20px Product Sans",
                  sm: "normal normal bold 20px/22px Product Sans",
                },
                letterSpacing: "0.9px",
                color: "#707787",
                pt: "2rem",
              }}
            >
              DB-808
            </Typography>
            <Typography
              sx={{
                font: {
                  xxs: "normal normal bold 18px/18px Product Sans",
                  xx: "normal normal bold 20px/22px Product Sans",
                  sm: "normal normal bold 22px/24px Product Sans",
                },
                letterSpacing: "0.9px",
                color: "#707787",
                pt: "2rem",
              }}
            >
              {initialTime
                ? checkin.checkInTime
                  ? format(new Date(checkin.checkInTime), "HH:mm:ss")
                  : "NA"
                : "00:00:00"}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xxs: "column", xs: "row" },
                gap: { xxs: 1, xs: 2, sm: 3 },
                mt: "3rem",
              }}
            >
              <Button
                onClick={checkInHandler}
                size="medium"
                variant="contained"
                color="success"
              >
                Check In
              </Button>
              <Button
                onClick={checkOutHandler}
                size="medium"
                variant="contained"
                color="error"
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
          <Box sx={style}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "1rem",
                }}
              >
                <Typography
                  sx={{
                    font: { xxs: "normal normal bold 18px/20px Product Sans" },
                    letterSpacing: "0.9px",
                    color: "#344054",
                  }}
                >
                  {navData.user.name}
                </Typography>
                <Box
                  onClick={handleClose}
                  sx={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
                  component="img"
                  src={cancle}
                ></Box>
              </Box>
              <Typography
                sx={{
                  font: { xxs: "normal normal normal 14px/16px Product Sans" },
                  // letterSpacing: "0.9px",
                  color: "#344054",
                  mb: "0.5rem",
                }}
              >
                {currentDate.toLocaleDateString(undefined, dateOptions)}
              </Typography>
              <Typography
                sx={{
                  font: { xxs: "normal normal normal 14px/16px Product Sans" },
                  // letterSpacing: "0.9px",
                  color: "#344054",
                  mb: "1rem",
                }}
              >
                {currentTime}
              </Typography>

              <Divider />
              <Box
                sx={{
                  pt: "2rem",
                  pb: "2rem",
                  display: " flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    background: "#6e915a ",
                    width: "30%",
                    borderRadius: "12px",
                    padding: "2rem 1rem 2rem 1rem",
                    boxSizing: "border-box",
                  }}
                >
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
                <Box
                  sx={{
                    background: "#b31b1b  ",
                    width: "30%",
                    borderRadius: "12px",
                    padding: "2rem 1rem 2rem 1rem",
                    boxSizing: "border-box",
                  }}
                >
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
                <Box
                  sx={{
                    background: "#FE8062   ",
                    width: "30%",
                    borderRadius: "12px",
                    padding: "2rem 1rem 2rem 1rem",
                    boxSizing: "border-box",
                  }}
                >
                  <QueryBuilderIcon sx={{ color: "white" }} />
                  <Typography sx={{ color: "white", mt: "1rem" }}>
                    {checktime.slice(0,22)}
                  </Typography>
                  <Typography sx={{ color: "white", mt: "0.5rem" }}>
                    Working Hours
                  </Typography>
                </Box>
              </Box>
              <Divider />

              <Typography
                sx={{
                  font: "normal normal bold 14px/18px Product Sans",
                  color: "#344054",
                  pt: "1rem",
                }}
              >
                Comments
              </Typography>
              <Box
                sx={{
                  mt: "1rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  component="img"
                  src={emptyUser}
                  sx={{
                    width: "3rem",
                    height: "3rem",
                    objectFit: "contain",
                  }}
                ></Box>
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
    </Container>
  );
};

export default CheckIn;
