import { Box, Button, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import { redBox, yellowBox } from "../user/style";
import {
  addressSx,
  btnBox,
  cView,
  cnicTypo,
  createdSx,
  createdView,
  dFlex,
  dView,
  departBox,
  departFlex,
  departInnerFlex,
  departTypo,
  desigSx,
  detailInner,
  detailMainBox,
  downloadBtn,
  editUserSx,
  emailBoxFlex,
  emailF,
  emailG,
  emailInnerFlex,
  emailMainFlex,
  emailT,
  flexImg,
  flexSx,
  genderTypo,
  iconBox,
  infoBox,
  infoTypo,
  lastFlex,
  mailTypo,
  nameFlex,
  nameSx,
  otherFlex,
  phoneTypo,
  statusSx,
  statusTypo,
  typoKey,
  typoValue,
} from "./style";
import Modal from "@mui/material/Modal";
import cancle from "../../assests/images/cancel.png";

import devbatchLogo from "../../assests/images/devbatchLogo.png";
import QR from "../../assests/images/QR.png";
import viewProfile from "../../assests/images/viewProfile.png";
import UploadFileIcon from '@mui/icons-material/UploadFile';
const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "54rem",
  bgcolor: "background.paper",
  boxShadow: "0px 0px 30px #00000080",
  border: " 2px solid #70707066",
  borderRadius: "3rem",
  padding: "2.5rem 6.7rem",
  boxSizing: "border-box",
};

const UserDetail = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const view = useSelector((state) => state.table.view);
  const data = useSelector((state) => state.table.data);

  const editHandler = (id) => {
    const editData = data.filter((item) => item.id === id);
    dispatch(tableActions.setEdit(editData));
    dispatch(tableActions.setShow("adduser"));
  };

  return (
    <Fragment>
      <Box sx={detailMainBox}>
        <Box sx={detailInner}>
          <Box sx={flexSx}>
            <Box component="img" sx={flexImg} src={view[0].image}></Box>
          </Box>

          <Box sx={otherFlex}>
            <Box sx={nameFlex}>
              <Box>
                <Typography sx={nameSx}>{view[0].name}</Typography>
                <Typography sx={desigSx}>{view[0].desgination}</Typography>
              </Box>

              <Box sx={statusSx}>
                <Box>{view[0].status === "Activated" ? yellowBox : redBox}</Box>
                <Typography sx={statusTypo}>{view[0].status}</Typography>
              </Box>

              <Box sx={btnBox}>
                <Button sx={downloadBtn} onClick={handleOpen}>
                  <FileDownloadIcon />
                  &nbsp; Download
                </Button>
                <Button
                  onClick={() => editHandler(view[0].id)}
                  sx={editUserSx}
                  variant="contained"
                >
                  <EditCalendarIcon />
                  &nbsp; Edit User
                </Button>
              </Box>
            </Box>
            <Box sx={iconBox}>
              <Box>
                <LocationOnIcon style={{ color: "#707787" }} />
              </Box>
              <Typography sx={addressSx}>{view[0].address}</Typography>
            </Box>

            <Box sx={infoBox}></Box>

            <Typography sx={infoTypo}>General Info</Typography>
            {/* <GeneralTable/> */}

            <Box sx={departFlex}>
              <Box sx={departInnerFlex}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={departBox}>
                    <Typography sx={departTypo}>Department:</Typography>
                    <Typography sx={cnicTypo}>CNIC:</Typography>
                    <Typography sx={createdSx}>Created at:</Typography>
                  </Box>

                  <Box sx={dFlex}>
                    <Typography sx={dView}>{view[0].department}</Typography>

                    <Typography sx={cView}>{view[0].cnic}</Typography>
                    <Typography sx={createdView}>{view[0].created}</Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={emailMainFlex}>
                <Box sx={emailInnerFlex}>
                  <Box sx={emailBoxFlex}>
                    <Typography sx={emailT}>Email:</Typography>
                    <Typography sx={emailF}>Phone:</Typography>
                    <Typography sx={emailG}>Gender:</Typography>
                  </Box>

                  <Box sx={lastFlex}>
                    <Typography sx={mailTypo}>{view[0].email}</Typography>

                    <Typography sx={phoneTypo}>{view[0].phone}</Typography>
                    <Typography sx={genderTypo}>{view[0].gender}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "2.6rem",
              }}
            >
              <Typography
                sx={{
                  font: "normal normal bold 26px/32px Product Sans",
                  letterSpacing: "0.78px",
                  color: "#344054",
                }}
              >
                Employee card
              </Typography>
              <Box
                sx={{ width: "22px", height: "22px", cursor : 'pointer' }}
                component="img"
                src={cancle}
                onClick={handleClose}
              ></Box>
            </Box>

            <Box sx={{ display: "flex", gap: 3 }}>
              <Box
                sx={{
                  flex: "calc((100% - 3rem) / 2)",
                  border: " 2px solid #70707066",
                  borderRadius: "1.3rem",
                  boxSizing: "border-box",
                  pt: "1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      background: "#FFFFFF 0% 0% no-repeat padding-box",
                      border: "1px dashed #707070",
                      borderRadius: "5px",
                      opacity: "0.15",
                      width: "46px",
                      height: "6px",
                      mb: "0.5rem",
                    }}
                  ></Box>

                  <Box
                    component="img"
                    src={devbatchLogo}
                    sx={{ mb: "0.5rem" }}
                  ></Box>
                  <Box
                    sx={{
                      background: "#ffedf1 0% 0% no-repeat padding-box",
                      pt: "1rem",
                      pb: "1rem",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      // alignItems: "center",
                      // opacity: 0.09
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: "12rem",
                        height: "12rem",
                        display: "inline-block",
                        // opacity : 1,
                      }}
                      src={viewProfile}
                    ></Box>
                  </Box>

                  <Box
                    sx={{
                      background: "#FE8062 0% 0% no-repeat padding-box",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      pt: "0.7rem",
                      pb: "0.7rem",
                      opacity: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        font: "normal normal bold 20px/24px Product Sans",
                        letterSpacing: "1.2px",
                        color: "#FFFFFF",
                      }}
                    >
                      Hassan Farooq
                    </Typography>
                    <Typography
                      sx={{
                        font: "normal normal normal 12px/15px Product Sans",
                        letterSpacing: "0.5px",
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                        pt: "0.3rem",
                      }}
                    >
                      UI/UX DESIGNER
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 1.5,
                      pt: "1.5rem",
                      pb: "1.5rem",
                    }}
                  >
                    <Box>
                      <Typography sx={typoKey}>Emp code:</Typography>
                      <Typography sx={typoKey}>Email:</Typography>
                      <Typography sx={typoKey}>Phone:</Typography>
                      <Typography sx={typoKey}>Department:</Typography>
                      <Typography sx={typoKey}>CNIC:</Typography>
                      <Typography sx={typoKey}>Issue Date:</Typography>
                    </Box>
                    <Box>
                      <Typography sx={typoValue}>DB-00555</Typography>
                      <Typography sx={typoValue}>
                        hassan123@gmail.com
                      </Typography>
                      <Typography sx={typoValue}>+92 859 43403</Typography>
                      <Typography sx={typoValue}>IT Consultant</Typography>

                      <Typography sx={typoValue}>33333-3333333-3</Typography>
                      <Typography sx={typoValue}>Nov 9, 2023</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  flex: "calc((100% - 3rem) / 2)",
                  border: " 2px solid #70707066",
                  borderRadius: "1.3rem",
                  boxSizing: "border-box",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      font: "normal normal bold 20px/24px Product Sans",
                      letterSpacing: "0.6px",
                      color: "#2E2F30",
                      pt: "3rem",
                    }}
                  >
                    Important
                  </Typography>
                  <Box
                    sx={{
                      padding: "1.5rem 1.9rem",
                    }}
                  >
                    <Typography>
                      1. Employees are expected to carry their cards with them
                      while on duty & produce the same on demand.
                    </Typography>
                    <Typography>
                      2. Loss of this card must be reported to the Issuing
                      Authority.
                    </Typography>
                  </Box>
                  <Box
                    component="img"
                    src={QR}
                    sx={{ width: "14rem", height: "14rem" }}
                  ></Box>
                  <Box
                    sx={{
                      boxSizing: "border-box",
                      background: "#FE8062 0% 0% no-repeat padding-box",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      // pt: "0.7rem",
                      // pb: "0.7rem",
                      padding: "1rem 1rem 1rem 1rem",
                      opacity: 1,
                      mt: "2rem",
                      borderRadius: "0px 0px 11px 11px",
                      // margin : 'auto'
                    }}
                  >
                    <Typography
                      sx={{
                        font: "normal normal normal 11px/14px Product Sans",
                        letterSpacing: "0.33px",
                        color: "#FFFFFF",
                      }}
                    >
                      If found please return to:
                    </Typography>
                    <Typography
                      sx={{
                        font: "normal normal normal 11px/14px Product Sans",
                        letterSpacing: "0.33px",
                        color: "#FFFFFF",
                        // pt: "0.3rem",
                      }}
                    >
                      144A Abubakar block garden town Lahore
                    </Typography>
                    <Typography
                      sx={{
                        font: "normal normal normal 11px/14px Product Sans",
                        letterSpacing: "0.33px",
                        color: "#FFFFFF",
                        // pt: "0.3rem",
                      }}
                    >
                      Pakistan - 54000
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pt: "2rem",
              }}
            >
              <Button
                sx={{
                  background: "#FE8062 0% 0% no-repeat padding-box",
                  font: "normal normal normal 11px/16px Product Sans",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                  padding : '0.7rem'
                }}
                variant="contained"
              >
                 <UploadFileIcon/> &nbsp;Download PFD
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Fragment>
  );
};

export default UserDetail;
