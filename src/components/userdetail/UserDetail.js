import { Box, Button, Typography } from "@mui/material";
import React, { Fragment } from "react";
import viewProfile from "../../assests/images/viewProfile.png";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GeneralTable from "../generalinfo/GeneralTable";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import { redBox, yellowBox } from "../user/style";

const UserDetail = () => {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.table.view);
  console.log(view,'test view data ............')


 
  return (
    <Fragment>
    
      <Box
        sx={{
          // height: "376px",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          border: "1px solid #EAEAEA",
          borderRadius: "12px",
          opacity: 1,
          width: "92%",
          margin: "0px auto",
          mt: "2rem",
          display: "flex",
          justifyContent: "space-between",
          padding: { xs: "1rem", sm: "2rem" },
          boxSizing: "border-box",

        }}
      >
          
        <Box
          sx={{
            // height: "100%",
            width: {md : '98%',sm : '90%',xs : '90%', xxs : '89%'},
            display: "flex",
            flexDirection: "row",
            boxSizing: "border-box",
            pb : '1rem'
          }}
        >
         
          <Box
            sx={{
              flex: "0 0 20%",
              padding :  {xxs : '0.5rem 0 0 0.5rem'},
              boxSizing: "border-box",
            }}
          >
            <Box
              component="img"
              sx={{
                height: {
                  xxs: "80px",
                  xs: "110px",
                  sm: "130px",
                  md: "150px",
                  lg: "200px",
                  xl: "248px",
                },
                width: {
                  xxs: "80px",
                  xs: "110px",
                  sm: "130px",
                  md: "150px",
                  lg: "200px",
                  xl: "248px",
                },
                borderRadius : '10px'
              }}
              src={view[0].image}
            ></Box>
          </Box>

          <Box
            sx={{
              flex: "0 0 80%",
              pl: { xxs: "0.5rem", xs: "1rem", sm: "3rem", xl: "4rem" },
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
                alignItems: "start",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    font: {
                      xxs: "normal normal bold 18px/24px Product Sans",
                      xs: "normal normal bold 22px/28px Product Sans",
                      sm: "normal normal bold 26px/33px Product Sans",
                      lg: "normal normal bold 28px/35px Product Sans",
                      xl: "normal normal bold 30px/37px Product Sans",
                    },
                    letterSpacing: "0.9px",
                    color: "#344054",
                    opacity: 1,
                  }}
                >
                  {view[0].name}
                </Typography>
                <Typography
                  sx={{
                    font: {
                      xxs: "normal normal normal 12px/16px Product Sans",
                      xs: "normal normal normal 14px/18px Product Sans",
                      sm: "normal normal normal 16px/20px Product Sans",
                      lg: "normal normal normal 18px/22px Product Sans",
                      xl: "normal normal normal 20px/24px Product Sans",
                    },
                    letterSpacing: "0.9px",
                    color: "#FE8062",
                    opacity: 1,
                  }}
                >
                  {view[0].desgination}
                </Typography>
              </Box>

              <Box
                sx={{
                  background: "#FFFFFF 0% 0% no-repeat padding-box",
                  border: "1px solid #B4E55C40",
                  borderRadius: "13px",
                  padding: "0.3rem 0.9rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  mt: { xxs: "0.9rem", xs: "1rem", lg: "0rem" },
                  ml: { lg: "-6rem", xl: " 0rem" },
                }}
              >
                <Box
                 
                >
                   {view[0].status === "Activated" ? yellowBox : redBox}
                </Box>
                <Typography
                  sx={{
                    font: {
                      xs: "normal normal normal 10px/12px Product Sans",
                      xs: "normal normal normal 12px/14px Product Sans",
                      lg: "normal normal normal 13px/15px Product Sans",
                    },
                    letterSpacing: "0px",
                    color: "#2D2D2D",
                    opacity: 1,
                    ml: "0.7rem",
                  }}
                >
                  {view[0].status}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: { xxs: "0.9rem", xs: "1rem", lg: "0rem" },
                }}
              >
                <Button
                  sx={{
                    // background: "#FE8062 0% 0% no-repeat padding-box",
                    font: {
                      xxs: "normal normal normal 8px/10px Product Sans",
                      xs: "normal normal normal 10px/12px Product Sans",
                      sm: "normal normal normal 12px/14px Product Sans",
                    },
                    textTransform: "capitalize",
                    color: "#FE8062",
                    padding: {
                      xxs: "0.2rem 0.4rem",
                      xs: "0.3rem 0.5rem",
                      sm: "0.6rem 1rem",
                      lg: "0.9rem 1.4rem",
                    },
                    border: "2px solid #FE8062",
                    boxSizing: "border-box",
                    mr: { xxs: "0.3rem", xs: "0.5rem", sm: "2rem" },
                  }}
                  // variant="outlined"
                >
                  <FileDownloadIcon />
                  &nbsp; Download
                </Button>
                <Button
                onClick={() =>  dispatch(tableActions.setShow('adduser')) }
                  sx={{
                    background: "#FE8062 0% 0% no-repeat padding-box",
                    font: {
                      xxs: "normal normal normal 8px/10px Product Sans",
                      xs: "normal normal normal 10px/12px Product Sans",
                      sm: "normal normal normal 12px/14px Product Sans",
                    },
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#d66145", // Define the hover effect style
                    },
                    color: "#FFFFFF",
                    padding: {
                      xxs: "0.3rem 0.6rem",
                      xs: "0.6rem 0.8rem",
                      sm: "0.8rem 1.2rem",
                      lg: "1rem 1.5rem",
                    },
                  }}
                  variant="contained"
                >
                  <EditCalendarIcon />
                  &nbsp; Edit User
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                mt: { xl: "3rem", xxs: "2rem" },
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box>
                <LocationOnIcon style={{ color: "#707787" }} />
              </Box>
              <Typography
                sx={{
                  font: {
                    xl: "normal normal normal 15px/18px Product Sans",
                    xs: "normal normal normal 12px/14px Product Sans",
                    xxs: "normal normal normal 10px/12px Product Sans",
                  },
                  letterSpacing: "0.45px",
                  color: "#707787",
                  ml: "0.6rem",
                }}
              >
                {view[0].address}
              </Typography>
            </Box>

            <Box
              sx={{
                background: "#FE8062 0% 0% no-repeat padding-box",
                opacity: 0.09,
                height: "2px",
                mt: {xxs : '0.5rem', sm : '1.8rem'},
                width : {xxs : '85%',xs : '90%', sm : '99%'}
              }}
            ></Box>

            <Typography
              sx={{
                font: {
                  xl: "normal normal bold 20px/24px Product Sans",
                  xxs: "normal normal bold 17px/21px Product Sans",
                },
                letterSpacing: "1.8px",
                color: "#FE8062",
                mt: {xxs : '1rem',sm : '2rem'},
                mb: {xxs : '1rem',sm : '2rem'},
              }}
            >
              General Info
            </Typography>
            {/* <GeneralTable/> */}

            <Box
              sx={{
                display: "flex",
                flexDirection : {xxs : 'column' , sm : 'row'},
                justifyContent: "space-between",
                pr : {xxs : '3rem',xs : '6rem',sm : '2rem' , md : '6rem'}
                
              }}
            >
              <Box sx={{ flex: {xxs : '50%',sm : '0 0 45%' , md : '0 0 37%'} }}>

              <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
                <Box sx={{display : 'flex' , flexDirection : 'column', justifyContent : 'space-between'}}>
                  <Typography
                    sx={{
                      font: {xxs : "normal normal normal 8px/11px Product Sans", lg : "normal normal normal 10px/13px Product Sans",xl : "normal normal normal 12px/15px Product Sans"},
                      letterSpacing: "0.36px",
                      color: "#707787",
                    }}
                  >
                    Department:
                  </Typography>
                  <Typography
                    sx={{
                      font: {xxs : "normal normal normal 8px/11px Product Sans", lg : "normal normal normal 10px/13px Product Sans",xl : "normal normal normal 12px/15px Product Sans"},
                      letterSpacing: "0.36px",
                      color: "#707787",
                    }}
                  >
                    CNIC:
                  </Typography>
                  <Typography
                    sx={{
                      font: {xxs : "normal normal normal 8px/11px Product Sans", lg : "normal normal normal 10px/13px Product Sans",xl : "normal normal normal 12px/15px Product Sans"},
                      letterSpacing: "0.36px",
                      color: "#707787",
                    }}
                  >
                    Created at:
                  </Typography>
                  
                </Box>

                <Box sx={{display : 'flex' , flexDirection : 'column', justifyContent : 'space-between'}}>
                <Typography
                    sx={{
                      font: {xl : "normal normal normal 15px/18px Product Sans",lg : "normal normal normal 13px/16px Product Sans",xxs : "normal normal normal 10px/12px Product Sans" },
                      letterSpacing: "0.45px",
                      color: "#344054",
                     
                    }}
                  >
                    {view[0].department}
                  </Typography>
                 
                  <Typography
                    sx={{
                      font: {xl : "normal normal normal 15px/18px Product Sans",lg : "normal normal normal 13px/16px Product Sans",xxs : "normal normal normal 10px/12px Product Sans" },
                      letterSpacing: "0.45px",
                      color: "#344054",
                      margin : '0.5rem 0'
                    }}
                  >
                     {view[0].cnic}
                  </Typography>
                  <Typography
                    sx={{
                      font: {xl : "normal normal normal 15px/18px Product Sans",lg : "normal normal normal 13px/16px Product Sans",xxs : "normal normal normal 10px/12px Product Sans" },
                      letterSpacing: "0.45px",
                      color: "#344054",
                    }}
                  >
                     {view[0].created}
                  </Typography>
                </Box>


          


              </Box>
              </Box>

              <Box sx={{ flex: {xxs : '0 0 35%',sm : '0 0 45%' , md : '0 0 37%'} }}>
                <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
                <Box sx={{display : 'flex' , flexDirection : 'column', justifyContent : 'space-between'}}>
                  <Typography
                    sx={{
                      font: {xxs : "normal normal normal 8px/11px Product Sans", lg : "normal normal normal 10px/13px Product Sans",xl : "normal normal normal 12px/15px Product Sans"},
                      letterSpacing: "0.36px",
                      color: "#707787",
                    }}
                  >
                    Email:
                  </Typography>
                  <Typography
                    sx={{
                      font: {xxs : "normal normal normal 8px/11px Product Sans", lg : "normal normal normal 10px/13px Product Sans",xl : "normal normal normal 12px/15px Product Sans"},
                      letterSpacing: "0.36px",
                      color: "#707787",
                    }}
                  >
                    Phone:
                  </Typography>
                  <Typography
                    sx={{
                      font: {xxs : "normal normal normal 8px/11px Product Sans", lg : "normal normal normal 10px/13px Product Sans",xl : "normal normal normal 12px/15px Product Sans"},
                      letterSpacing: "0.36px",
                      color: "#707787",
                    }}
                  >
                    Gender:
                  </Typography>
                  
                </Box>

                <Box sx={{display : 'flex' , flexDirection : 'column', justifyContent : 'space-between'}}>
                <Typography
                    sx={{
                      font: {xl : "normal normal normal 15px/18px Product Sans",lg : "normal normal normal 13px/16px Product Sans",xxs : "normal normal normal 10px/12px Product Sans" },
                      letterSpacing: "0.45px",
                      color: "#344054",
                     
                    }}
                  >
                    {view[0].email}
                  </Typography>
                 
                  <Typography
                    sx={{
                      font: {xl : "normal normal normal 15px/18px Product Sans",lg : "normal normal normal 13px/16px Product Sans",xxs : "normal normal normal 10px/12px Product Sans" },
                      letterSpacing: "0.45px",
                      color: "#344054",
                      margin : '0.5rem 0'
                    }}
                  >
                     {view[0].phone}
                  </Typography>
                  <Typography
                    sx={{
                      font: {xl : "normal normal normal 15px/18px Product Sans",lg : "normal normal normal 13px/16px Product Sans",xxs : "normal normal normal 10px/12px Product Sans" },
                      letterSpacing: "0.45px",
                      color: "#344054",
                    }}
                  >
                     {view[0].gender}
                  </Typography>
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
