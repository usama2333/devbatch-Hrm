import { Box, Button, Typography } from "@mui/material";
import React, { Fragment } from "react";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import { redBox, yellowBox } from "../user/style";
import {
  QRImg,
  addressSx,
  addressTypo,
  btnBox,
  cView,
  cnicTypo,
  countryTypo,
  createdSx,
  createdView,
  dFlex,
  dView,
  departBox,
  departFlex,
  departInnerFlex,
  departTypo,
  desginationTypo,
  desigSx,
  detailInner,
  detailMainBox,
  downloadBtn,
  downloadBtnBox,
  editUserSx,
  emailBoxFlex,
  emailF,
  emailG,
  emailInnerFlex,
  emailMainFlex,
  emailT,
  employeeTypo,
  firstCal,
  firstCalBack,
  firstCalFlex,
  firstImg,
  firstImgCon,
  firstNameBox,
  flexImg,
  flexSx,
  foundTypo,
  genderTypo,
  iconBox,
  impTypo,
  infoBox,
  infoTypo,
  lastFlex,
  liBox,
  mailTypo,
  mainConFlex,
  modalFlex,
  modalStyel,
  nameFlex,
  nameSx,
  nameTypo,
  otherFlex,
  pdfBtn,
  phoneTypo,
  returnBox,
  secondBox,
  secondCon,
  statusSx,
  statusTypo,
  typoKey,
  typoKeyBox,
  typoValue,
} from "./style";
import Modal from "@mui/material/Modal";
import cancle from "../../assests/images/cancel.png";
import devbatchLogo from "../../assests/images/devbatchLogo.png";
import QR from "../../assests/images/QR.png";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Link, Outlet } from "react-router-dom";

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
    dispatch(tableActions.setShow("updateuser"));
  };

  const printHandler = () => {
    window.print();
  }

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
                <Link to='/adduser'>
                <Button
                  onClick={() => editHandler(view[0].id)}
                  sx={editUserSx}
                  variant="contained"
                >
                  <EditCalendarIcon />
                  &nbsp; Edit User
                </Button>
                </Link>
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
          <Box sx={modalStyel}>
            <Box sx={modalFlex}>
              <Typography sx={employeeTypo}>Employee card</Typography>
              <Box
                sx={{ width: "22px", height: "22px", cursor: "pointer", '@media print' : {
    display: "none",
    
} }}
                component="img"
                src={cancle}
                onClick={handleClose}
              ></Box>
            </Box>

            <Box sx={mainConFlex}>
              <Box sx={firstCal}>
                <Box sx={firstCalFlex}>
                  <Box sx={firstCalBack}></Box>

                  <Box
                    component="img"
                    src={devbatchLogo}
                    sx={{ mb: "0.5rem" }}
                  ></Box>
                  <Box sx={firstImgCon}>
                    <Box
                      component="img"
                      sx={firstImg}
                      src={view[0].image}
                    ></Box>
                  </Box>

                  <Box sx={firstNameBox}>
                    <Typography sx={nameTypo}>{view[0].name}</Typography>
                    <Typography sx={desginationTypo}>
                      {view[0].designation}
                    </Typography>
                  </Box>

                  <Box sx={typoKeyBox}>
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
                      <Typography sx={typoValue}>{view[0].email}</Typography>
                      <Typography sx={typoValue}>{view[0].phone}</Typography>
                      <Typography sx={typoValue}>
                        {view[0].department}
                      </Typography>

                      <Typography sx={typoValue}>{view[0].cnic}</Typography>
                      <Typography sx={typoValue}>{view[0].created}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={secondCon}>
                <Box sx={secondBox}>
                  <Typography sx={impTypo}>Important</Typography>
                  <Box sx={liBox}>
                    <Typography
                      sx={{
                        color: "#344054",
                      }}
                    >
                      1. Employees are expected to carry their cards with them
                      while on duty & produce the same on demand.
                    </Typography>
                    <Typography
                      sx={{
                        color: "#344054",
                      }}
                    >
                      2. Loss of this card must be reported to the Issuing
                      Authority.
                    </Typography>
                  </Box>
                  <Box component="img" src={QR} sx={QRImg}></Box>
                  <Box sx={returnBox}>
                    <Typography sx={foundTypo}>
                      If found please return to:
                    </Typography>
                    <Typography sx={addressTypo}>
                      144A Abubakar block garden town Lahore
                    </Typography>
                    <Typography sx={countryTypo}>Pakistan - 54000</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={downloadBtnBox}>
              <Button onClick={printHandler} sx={pdfBtn} variant="contained">
                <UploadFileIcon /> &nbsp;Download PDF
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Fragment>
  );
};

export default UserDetail;
