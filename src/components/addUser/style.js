

import cancel from "../../assests/images/cancel.png";
import dummy from "../../assests/images/dummy.png";
import emptyUser from "../../assests/images/emptyUser.png";

export {cancel,dummy,emptyUser}

export const mainBox = {
    width: "93%",
    // height: "500px",
    margin: "0px auto",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #EAEAEA",
    borderRadius: "12px",
    opacity: 1,
    mt: "3rem",
    padding: "1rem",
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
    fontSize: "1.4rem",
    color: "#FFFFFF",
    maxWidth: "376px",
    // padding : '0 1rem',
    pl: "3rem",
    pr: "3rem",
    textTransform: "capitalize",
    background: "#FE8062 0% 0% no-repeat padding-box",
    "&:hover": {
      backgroundColor: "#d66145",
    },
}

export const statusSx = {
    font: "normal normal normal 14px/17px Product Sans",
                letterSpacing: "0px",
                color: "#344054",
                mr: "15rem",
}

export const statusBox = {
    display: "flex",
    alignItems: "center",
    mt: "1rem",
}

export const  cancelBox = {
    height: "22px",
    width: "22px",
    mt: "1rem",
    cursor: "pointer",
}
export const uploadTypo = {
    font: "normal normal normal 14px/17px Product Sans",
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
    display: { xxs: "none", sm: "flex" },
    objectFit : 'cover',
    boxSizing : 'border-box'
    // ml : '4rem'
}

export const dummyImgFlex = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: { xxs: "wrap", sm: "nowrap" },
    pr: { sm: "0rem", md: "2rem", lg: "3rem" },
}
export const infoSx = {
    font: "normal normal normal 20px/24px Product Sans",
    letterSpacing: "0.6px",
    color: "#222222",
    opacity: 1,
    padding: "1rem",
    pl: "3rem",
}
export const infoSxBox = {
    background: "#F3F3F3 0% 0% no-repeat padding-box",
            borderRadius: "4px",
}