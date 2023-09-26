// import React, { Fragment, useEffect } from 'react';
// import Modal from "@mui/material/Modal";
// import cancle from "../../assests/images/cancel.png";

// import devbatchLogo from "../../assests/images/devbatchLogo.png";
// import QR from "../../assests/images/QR.png";
// import viewProfile from "../../assests/images/viewProfile.png";
// import UploadFileIcon from "@mui/icons-material/UploadFile";
// import { Box, Button, Typography } from '@mui/material';
// import { typoKey, typoValue } from './style';

// const style = {
//     position: "absolute",
//     top: "50%",
//     left: { sm: "60%", xs: "55%", xxs: "55%" },
//     transform: "translate(-50%, -50%)",
//     width: { xxs: "75%", xs: "70%", sm: "70%", md: "60%", lg: "50%" },
//     maxWidth: "800px",
//     // height: "54rem",
//     bgcolor: "background.paper",
//     boxShadow: "0px 0px 30px #00000080",
//     border: "1px solid #707070",
//     borderRadius: "3rem",
//     padding: {
//       md: "2.5rem 6.7rem",
//       sm: "2.5rem 2rem",
//       xs: "2.5rem 3rem",
//       xxs: "2rem 1rem",
//     },
//     boxSizing: "border-box",
//   };

// const ModalCrad = ({view,handleView,handleOpen}) => {

//     const [open, setOpen] = React.useState(null);
//     console.log(handleView,'....l.....')
    
//    useEffect(()=> {
//     if(handleView === true) {
//         setOpen(true);
//         handleOpen(true);
//     }else {
//         setOpen(false)
//     }
//    },[handleView,open])
// //   const handleOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//     handleOpen(false);
//   } 
//   return (
//     <Fragment>
//             <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 paddingBottom: "2.6rem",
//               }}
//             >
//               <Typography
//                 sx={{
//                   font: {
//                     xxs: "normal normal bold 18px/25px Product Sans",
//                     xs: "normal normal bold 22px/28px Product Sans",
//                     sm: "normal normal bold 26px/32px Product Sans",
//                   },
//                   letterSpacing: "0.78px",
//                   color: "#344054",
//                 }}
//               >
//                 Employee card
//               </Typography>
//               <Box
//                 sx={{ width: "22px", height: "22px", cursor: "pointer" }}
//                 component="img"
//                 src={cancle}
//                 onClick={handleClose}
//               ></Box>
//             </Box>

//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: { xxs: "column", sm: "row" },
//                 gap: { xxs: 2, sm: 2, md: 3 },
//               }}
//             >
//               <Box
//                 sx={{
//                   flex: "calc((100% - 3rem) / 2)",
//                   border: " 2px solid #70707066",
//                   borderRadius: "1.3rem",
//                   boxSizing: "border-box",
//                   pt: "1rem",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     height: "100%",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       background: "#FFFFFF 0% 0% no-repeat padding-box",
//                       border: "1px dashed #707070",
//                       borderRadius: "5px",
//                       opacity: "0.15",
//                       width: "46px",
//                       height: "6px",
//                       mb: "0.5rem",
//                     }}
//                   ></Box>

//                   <Box
//                     component="img"
//                     src={devbatchLogo}
//                     sx={{ mb: "0.5rem" }}
//                   ></Box>
//                   <Box
//                     sx={{
//                       background: "#ffedf1 0% 0% no-repeat padding-box",
//                       pt: "1rem",
//                       pb: "1rem",
//                       width: "100%",
//                       display: "flex",
//                       justifyContent: "center",
//                       // alignItems: "center",
//                       // opacity: 0.09
//                     }}
//                   >
//                     <Box
//                       component="img"
//                       sx={{
//                         width: {
//                           xxs: "8rem",
//                           xs: "9rem",
//                           sm: "9rem",
//                           md: "10rem",
//                           lg: "11rem",
//                           xl: "12rem",
//                         },
//                         height: {
//                           xxs: "8rem",
//                           xs: "9rem",
//                           sm: "9rem",
//                           md: "10rem",
//                           lg: "11rem",
//                           xl: "12rem",
//                         },
//                         display: "inline-block",
//                         borderRadius : '10px'
//                         // opacity : 1,
//                       }}
//                       src={view[0].image}
//                     ></Box>
//                   </Box>

//                   <Box
//                     sx={{
//                       background: "#FE8062 0% 0% no-repeat padding-box",
//                       width: "100%",
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       pt: "0.7rem",
//                       pb: "0.7rem",
//                       opacity: 1,
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         font: {
//                           sm: "normal normal bold 18px/20px Product Sans",
//                           md: "normal normal bold 19px/22px Product Sans",
//                           lg: "normal normal bold 20px/24px Product Sans",
//                         },
//                         letterSpacing: "1.2px",
//                         color: "#FFFFFF",
//                       }}
//                     >
//                       {view[0].name}
//                     </Typography>
//                     <Typography
//                       sx={{
//                         font: "normal normal normal 12px/15px Product Sans",
//                         letterSpacing: "0.5px",
//                         color: "#FFFFFF",
//                         textTransform: "uppercase",
//                         pt: "0.3rem",
//                       }}
//                     >
//                       {view[0].designation}
//                     </Typography>
//                   </Box>

//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "row",
//                       gap: { xxs: "0.5rem", sm: "0.5rem", md: "1.5rem" },
//                       pt: "1.5rem",
//                       pb: "1.5rem",
//                     }}
//                   >
//                     <Box>
//                       <Typography sx={typoKey}>Emp code:</Typography>
//                       <Typography sx={typoKey}>Email:</Typography>
//                       <Typography sx={typoKey}>Phone:</Typography>
//                       <Typography sx={typoKey}>Department:</Typography>
//                       <Typography sx={typoKey}>CNIC:</Typography>
//                       <Typography sx={typoKey}>Issue Date:</Typography>
//                     </Box>
//                     <Box>
//                       <Typography sx={typoValue}>DB-00555</Typography>
//                       <Typography sx={typoValue}>
//                        {view[0].email}
//                       </Typography>
//                       <Typography sx={typoValue}>{view[0].phone}</Typography>
//                       <Typography sx={typoValue}>{view[0].department}</Typography>

//                       <Typography sx={typoValue}>{view[0].cnic}</Typography>
//                       <Typography sx={typoValue}>{view[0].created}</Typography>
//                     </Box>
//                   </Box>
//                 </Box>
//               </Box>
//               <Box
//                 sx={{
//                   flex: "calc((100% - 3rem) / 2)",
//                   border: " 2px solid #70707066",
//                   borderRadius: "1.3rem",
//                   boxSizing: "border-box",
//                   width: "100%",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     flexDirection: "column",
//                     // gap : 2,
//                     height: "100%",
//                     width: "100%",
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       font: "normal normal bold 20px/24px Product Sans",
//                       letterSpacing: "0.6px",
//                       color: "#2E2F30",
//                       pt: {
//                         xxs: "1.2rem",
//                         xs: "1.2rem",
//                         sm: "1.5rem",
//                         md: "1.5rem",
//                         lg: "3rem",
//                       },
//                       pb: { xxs: "1rem", xs: "1.2rem", sm: "0rem" },
//                     }}
//                   >
//                     Important
//                   </Typography>
//                   <Box
//                     sx={{
//                       // padding: "1.5rem 1.9rem",
//                       pl: {
//                         xxs: "1rem",
//                         xs: "1rem",
//                         sm: "0.8rem",
//                         md: "1.2rem",
//                         lg: "1.9rem",
//                       },
//                       pr: {
//                         xxs: "1rem",
//                         xs: "1rem",
//                         sm: "0.8rem",
//                         md: "1.2rem",
//                         lg: "1.9rem",
//                       },
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         color: "#344054",
//                       }}
//                     >
//                       1. Employees are expected to carry their cards with them
//                       while on duty & produce the same on demand.
//                     </Typography>
//                     <Typography
//                       sx={{
//                         color: "#344054",
//                       }}
//                     >
//                       2. Loss of this card must be reported to the Issuing
//                       Authority.
//                     </Typography>
//                   </Box>
//                   <Box
//                     component="img"
//                     src={QR}
//                     sx={{
//                       width: {
//                         xxs: "7rem",
//                         xs: "8rem",
//                         sm: "9rem",
//                         md: "10rem",
//                         lg: "13rem",
//                         xl: "14rem",
//                       },
//                       height: {
//                         xxs: "7rem",
//                         xs: "8rem",
//                         sm: "9rem",
//                         md: "10rem",
//                         lg: "13rem",
//                         xl: "14rem",
//                       },
//                       pt: { xxs: "1rem", xs: "1.2rem", sm: "0rem" },
//                       pb: { xxs: "1rem", xs: "1.2rem", sm: "0rem" },
//                     }}
//                   ></Box>
//                   <Box
//                     sx={{
//                       boxSizing: "border-box",
//                       background: "#FE8062 0% 0% no-repeat padding-box",
//                       width: "100%",
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       // pt: "0.7rem",
//                       // pb: "0.7rem",
//                       padding: "1rem 1rem 1rem 1rem",
//                       opacity: 1,
//                       // mt: {md : '2rem',lg : '2.7rem', xl : '4.7rem'},
//                       borderRadius: "0px 0px 11px 11px",
//                       // margin : 'auto'
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         font: "normal normal normal 11px/14px Product Sans",
//                         letterSpacing: "0.33px",
//                         color: "#FFFFFF",
//                       }}
//                     >
//                       If found please return to:
//                     </Typography>
//                     <Typography
//                       sx={{
//                         font: "normal normal normal 11px/14px Product Sans",
//                         letterSpacing: "0.33px",
//                         color: "#FFFFFF",
//                         // pt: "0.3rem",
//                       }}
//                     >
//                       144A Abubakar block garden town Lahore
//                     </Typography>
//                     <Typography
//                       sx={{
//                         font: "normal normal normal 11px/14px Product Sans",
//                         letterSpacing: "0.33px",
//                         color: "#FFFFFF",
//                         // pt: "0.3rem",
//                       }}
//                     >
//                       Pakistan - 54000
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 pt: "2rem",
//               }}
//             >
//               <Button
//                 sx={{
//                   background: "#FE8062 0% 0% no-repeat padding-box",
//                   font: {
//                     xxs: "normal normal normal 10px/14px Product Sans",
//                     sm: "normal normal normal 11px/16px Product Sans",
//                   },
//                   letterSpacing: "0px",
//                   color: "#FFFFFF",
//                   padding: "0.7rem",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textTransform : 'capitalize',
//                   "&:hover": {
//                     backgroundColor: "#FE8062 ",
//                     color: "#FFFFFF", // Define the hover effect style
//                   },
//                 }}
//                 variant="contained"
//               >
//                 <UploadFileIcon /> &nbsp;Download PDF
//               </Button>
//             </Box>
//           </Box>
//         </Modal>
      
//     </Fragment>
//   )
// }

// export default ModalCrad
