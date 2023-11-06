

import cancel from "../../assests/images/cancel.png";
import dummy from "../../assests/images/dummy.png";
import emptyUser from "../../assests/images/emptyUser.png";

export {cancel,dummy,emptyUser}

export const mainBox = {
    width: {xxs : '84%',xs : '88%', sm :'93%'},
    // height: "500px",
    margin: "0px auto",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #EAEAEA",
    borderRadius: "12px",
    opacity: 1,
    mt: {xxs : '2rem', xs : '2rem',sm :'3rem'},
    padding: "1rem",
}

export const formBox = {
    display: "flex",
    flexDirection : {xxs : 'column', sm :'row'},
    mt: "0.5rem",
    gap : 2
}
export const inputTextStyle = {
    font: {xxs : '"normal normal normal 12px/14px Product Sans"',sm :"normal normal normal 12px/14px Product Sans",md : "normal normal normal 14px/17px Product Sans"},
                  letterSpacing: "0px",
                  color: "#344054",
                  mb : '0.6rem',
                  mt : '1.5rem'
}

export const phoneTextStyle = {
    font: {xxs : '"normal normal normal 12px/14px Product Sans"',sm :"normal normal normal 12px/14px Product Sans",md : "normal normal normal 14px/17px Product Sans"},
                  letterSpacing: "0px",
                  letterSpacing: "0px",
                  color: "#344054",
                  mb : '0.6rem',
                  mt : '1.2rem'
}
export const createButton = {
    mt: "0rem",
    fontSize: "1.2rem",
    color: "#FFFFFF",
    maxWidth: "376px",
    // padding : '0 1rem',
    pl: {xxs : '2.2.rem', xs : '3rem'},
    pr: {xxs : '2.2.rem', xs : '3rem'},
    textTransform: "capitalize",
    background: "#FE8062 0% 0% no-repeat padding-box",
    "&:hover": {
      backgroundColor: "#d66145",
    },
}

export const statusSx = {
    font: {xxs: "normal normal normal 14px/15px Product Sans", xs : "normal normal normal 14px/17px Product Sans"},
                letterSpacing: "0px",
                color: "#344054",
                mr: {xxs : '0rem', xs : '0rem', sm : '15rem'},
}

export const statusBox = {
    display: "flex",
    alignItems: "center",
    justifyContent : {xxs : 'space-between',sm : 'start' },
    mt: "1rem",
}

export const  cancelBox = {
    height: "22px",
    width: "22px",
    mt: "1rem",
    cursor: "pointer",
    display : {xxs : 'none', xs :'flex'}
}
export const uploadTypo = {
    font: {xxs : "normal normal normal 12px/18px Product Sans", sm :"normal normal normal 14px/17px Product Sans"},
    color: "#FFFFFF",
    textTransform: "capitalize",
    ml: "0.7rem",
}
export const buttonClickSx = {
    background: "#FE8062 0% 0% no-repeat padding-box",
    "&:hover": {
      backgroundColor: "#d66145",
    
}}

export const buttonSx = {
    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
}



export const dummyImgSx = {
    width: { sm: "40px", md: "70px", lg: "80px" },
    height: { sm: "30px", md: "60px" },
}

export const dummyImgBox = {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #D0D5DD",
    borderRadius: "10px",
    height: { sm: "60px", md: "118px", lg: "130px" },
    width: { sm: "60px", md: "118px", lg: "130px" },
    mt: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    display: { xxs: "none", xs: "flex" },
    objectFit : 'cover',
    boxSizing : 'border-box',
    // mb : '3.5rem'
    // ml : '4rem'
    // backgroundColor : 'red'
}

export const dummyImgFlex = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: { xxs: "wrap", sm: "nowrap" },
    pr: { sm: "0rem", md: "2rem", lg: "3rem" },
    // backgroundColor : 'red',
    mb : {sm : '0rem', md : '2.6rem', lg : '1.4rem'}
}
export const infoSx = {
    font: {xxs : "normal normal normal 1.8rem/2rem Product Sans",sm : "normal normal normal 2rem/2.4rem Product Sans"},
    letterSpacing: "0.6px",
    color: "#222222",
    opacity: 1,
    padding: "1rem",
    pl: {xxs : '1rem', xs : '3rem'},
}
export const infoSxBox = {
    background: "#F3F3F3 0% 0% no-repeat padding-box",
            borderRadius: "4px",
}

export const selectedImgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
}