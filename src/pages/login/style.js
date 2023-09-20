
import backgroundImg from "../../assests/images/loginBack.png";

export const conSx = {
  background:  "#FADCD5 0% 0% no-repeat padding-box",
  opacity: 1,
  backgroundImage: {xxs : `url(${backgroundImg})`,lg : 'none'},
  backgroundSize : 'cover',
  backgroundRepeat : 'no-repeat',
  objectFit : 'cover',
  // minHeight : '100vh',
  // overflow : 'hidden'
};

export const firstBox = {
  flex: {
    xxs: "0 0 100%",
    xs: "0 0 100%",
    sm: "0 0 100%",
    md: "0 0 100%",
    lg: "0 0 40%",
  },
  position: "relative",
  
};

export const absoluteBox = {
  // mt: "5.8rem",
  // mb : '2rem',
  width: {xxs :'90%',sm :'80%' ,md : '70%', lg : '100%'},
  // height: "500px",
  /* UI Properties */
  background: "#F9F9F9 0% 0% no-repeat padding-box",
  boxShadow: "0px 0px 70px #FE80626E",
  borderRadius: { xxs: "2rem", xs: "2rem", sm: "4rem" },
  opacity: 1,
  position: "absolute",
  inset: 0,
  height: "fit-content",
  margin: "auto",
  left: { xxs: "0rem", lg: "10.5rem" },
};

export const loginTypo = {
  textAlign: "center",
  // paddingTop: "5rem",
  font:{xxs :  "normal normal bold 3rem/4rem Product Sans",xs:  "normal normal bold 3.5rem/4.3rem Product Sans",xl :  "normal normal bold 3.8rem/4.5rem Product Sans"},
  letterSpacing: "0px",
  color: "#3A3A3A",
  textTransform: "uppercase",
  opacity: 1,
};

export const detailTypo = {
  textAlign: "center",
  paddingTop: {xxs : '0.8',xl : " 1rem"},
  font: {xxs : "normal normal normal 1.6rem Product Sans", xl :"normal normal normal 1.8rem Product Sans"},
  letterSpacing: "0px",
  color: "#667085",
  opacity: 1,
};

export const formBox = {
  // marginLeft: { xxs: "1.5rem",xs: "1.5rem", sm: "8rem" },
  // mr: { xs: "1.5rem",xxs: "1.5rem" },
};

export const emailBox = {
  mt: {xxs : '3rem', xl :'4rem'},
  mb: {xxs :'0.6rem', xl : '1rem'},
  font: "normal normal normal 1.6rem Product Sans",
  letterSpacing: "0px",
  color: "#344054",
  opacity: 1,
};

export const passwordBox = {
  mt: "2rem",
  mb: "1rem",
  font: "normal normal normal 1.6rem Product Sans",
  letterSpacing: "0px",
  color: "#344054",
  opacity: 1,
};

export const remBox = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  ml: "-1rem",
  mt : {xxs : '0rem' , xl :'1.2rem'}
};

export const remTypo = {
  color: "#344054 ",
  ml: "-0.5rem",
  opacity: 1,
};

export const forgotBox = {
  // mr: {xxs : '0rem', sm :'8rem'},
  color: "#FE8062",
  cursor: "pointer",
};

export const signInBox = {
  mt: {xxs : '2rem' , xl : '3rem'},
  fontSize: {xxs : '1.4rem', xl : '2rem'},
  color: "#FFFFFF",
  width: "100%",
  height : '5rem',
  background: "#FE8062 0% 0% no-repeat padding-box",
  mb: "3rem",
  "&:hover": {
    backgroundColor: "#d66145",
  },
};

export const accountBox = {
  textAlign: "center",
  // ml: {xxs : '0rem',xs : '-3rem', sm : '-8rem'},
  font: "normal normal normal 1.2rem Product Sans",
  color: "#344054",
  opacity: 1,
  pb: "5rem",
};

export const spanBox = {
  color: "#FE8062",
  textDecoration: "underline",
  textTransform: "capitalize",
  cursor: "pointer",
};

export const devBox = {
  // ml: {xxs : '0rem',xs : '-3rem', sm : '-8rem'},
  textAlign: "center",
  font: "italic normal normal 1.3rem Product Sans",
  letterSpacing: "0px",
  color: "#667085",
  opacity: 1,
  pb: "2rem",
  // mt : '1rem'
};

export const secondBox = {
  flex: {
    xxs: "0 0 0%",
    xs: "0 0 0%",
    sm: "0 0 0%",
    md: "0 0 0%",
    lg: "0 0 60%",
  },
  height: "100%",
};

export const imgBox = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: { xxs: "none", lg: "block" },
};

export const formMainCon = {
  padding: {
    xl :"6.5rem 7rem 0rem 7rem",
    md: "5.9rem 6.5rem 0rem 6.5rem",
    sm: "3.9rem 4.5rem 0rem 4.5rem",
    xs: "3.5rem 4rem 0rem 4rem",
    xxs: "2.9rem 3.5rem 0rem 2.5rem",
  },
  
};
