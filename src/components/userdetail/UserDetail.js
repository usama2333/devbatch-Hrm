import { Box, Button, Typography } from "@mui/material";
import React, { Fragment } from "react";
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
} from "./style";
import { emailBox } from "../../pages/reset/style";

const UserDetail = () => {
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
                <Button sx={downloadBtn} >
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
    </Fragment>
  );
};

export default UserDetail;
