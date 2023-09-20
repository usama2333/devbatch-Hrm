import backgroundImg from "../../assests/images/loginBack.png";
export const conBox = {
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

export const absBox = {
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

export const signUpTypo = {
  textAlign: "center",
  // paddingTop: "5rem",
  font:{xxs :  "normal normal bold 2.5rem/3.5rem Product Sans",xs:  "normal normal bold 3.2rem/4.2rem Product Sans",xl :  "normal normal bold 3.8rem/4.5rem Product Sans"},
  letterSpacing: "0px",
  color: "#3A3A3A",
  textTransform: "uppercase",
  opacity: 1,
};

export const createBox = {
  textAlign: "center",
  paddingTop: {xxs : '0.8',xl : " 1rem"},
  font: {xxs : "normal normal normal 1.4rem Product Sans", xl :"normal normal normal 1.8rem Product Sans"},
  letterSpacing: "0px",
  color: "#667085",
  opacity: 1,
};

export const emailBox = {
  // marginLeft: { xxs: "1.5rem",xs: "1.5rem", sm: "8rem" },
  // mr: { xxs: "1.5rem",xs: "1.5rem" },
};

export const emailTypo = {
  mt: "1rem",
  mb: "0.6rem",
  font: {xxs : "normal normal normal 1.4rem Product Sans",xl : "normal normal normal 1.6rem Product Sans"},
  letterSpacing: "0px",
  color: "#344054",
  opacity: 1,
};

export const signUpBtn = {
  mt: {xxs : '2rem' , xl : '3rem'},
  fontSize: {xxs : '1.4rem', xl : '2rem'},
  color: "#FFFFFF",
  width: "100%",
  height : '5rem',
  background: "#FE8062 0% 0% no-repeat padding-box",
  mb: "2rem",
  "&:hover": {
    backgroundColor: "#d66145",
  },
}

export const alreadyAccount = {
  textAlign: "center",
  font: "normal normal normal 1.2rem Product Sans",
  letterSpacing: "0px",
  color: "#344054",
  opacity: 1,
  pb: "3rem",
};

export const secondHaf = {
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
    md: "4.5rem 5.5rem 0rem 5.5rem",
    sm: "3.9rem 4.5rem 0rem 4.5rem",
    xs: "3.5rem 4rem 0rem 4rem",
    xxs: "2.9rem 3.5rem 0rem 2.5rem",
  },
  
};