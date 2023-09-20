
import red from "../../assests/images/blue.png";
import blue from "../../assests/images/red.png";

export const userRecent = {
    font: 'normal normal medium 14px/21px Poppins',
    letterSpacing: '0px',
    color: '#2D2D2D',
    opacity: 1,
   
}

export const userName = {
    font: 'normal normal medium 14px/21px Poppins',
    letterSpacing: '0px',
    color: '#2D2D2D',
    opacity: 1,
    ml : {xxs : '-30px' ,xs : '-30px' , sm :'-80px'}
}

export const depart = [
    {
      img: blue,
      name: "No of Users",
      user: "22000",
    },
    {
      img: red,
      name: "Departmnet",
      user: "07",
    },
  ];

export const welcome = {
    font: {
        xxs: "normal normal normal 18px/22px Product Sans",
        xs: "normal normal normal 18px/22px Product Sans",
        sm: "normal normal normal 20px/24px Product Sans",
      },
      letterSpacing: "0px",

    //   ml: {xxs: "2rem", xs: "2rem", sm: "4rem" },
      opacity: 1,
}
  
export const nameTypo = {
    font: {
        xxs: "normal normal bold 18px/22px Product Sans",
        xs: "normal normal bold 18px/22px Product Sans",
        sm: "normal normal bold 20px/24px Product Sans",
      },
      letterSpacing: "0px",
      letterSpacing: "0px",

    //   ml: { xxs: "2rem",xs: "2rem", sm: "4rem" },
      opacity: 1,
}

export const calanderMain={
    // background: "#FCFCFC 0% 0% no-repeat border-box",
    borderRadius: "5px",
    opacity: 1,
    // mr: {xxs : '2rem',xs : '4rem'},
    mt: "3rem",
}

export const dateBox={
    font: "normal normal normal 16px/19px Product Sans",
    letterSpacing: "0px",
    color: "#707787",
    opacity: 1,
    ml: "1rem",
    
}

export const graphStack= {
    mt: "2rem",
    // ml: { xs: "0rem",xs: "0rem", sm: "3rem" },
    // pb: "4.2rem",
   
}
export const graphFlex = {
    // flex: {
    //     lg: "0 0 50%",
    //     xxs: "0 0 95%",
    //   },
   
      flex: 'calc((100% - 3rem) / 2)',
      mt: { xxs: "2rem",xs: "2rem", lg: "0rem" },
      boxSizing : 'border-box'
    
}
export const userGeneral= {
    font: "normal normal bold 18px/22px Product Sans",
    letterSpacing: "0px",
    color: "#3A3A3A",
    mb: "1rem",
}

export const recentFlex = {
    // flex: {
    //     lg: "0 0 50%",
    //     xxs: "0 0 95%",
    //   },
    boxSizing : 'border-box',
    flex: 'calc((100% - 3rem) / 2)',
      
}

export const recentTypo= {
    font: "normal normal bold 18px/22px Product Sans",
    letterSpacing: "0px",
    color: "#3A3A3A",
    mb: "1rem",
}

export const recentUserBox= {
    border: "1px solid #F3F3F3",
    borderRadius: "11px",
    // mr: { xxs: "0rem",xs: "0rem", lg: "3rem" },
    padding: "0.9rem 1.3rem",
}
export const recentUserStack= {
    background: "#F3F3F3 0% 0% no-repeat padding-box",
    padding: "0.6rem 0rem",
    boxSizing: "border-box",
    borderRadius: "3px",
}

  
export const firstFlex = {
  display: "flex",
  gap: "3rem",
  // flex : '0 0 50%',
  flex: "calc((100% - 3rem) / 2)",
  flexDirection: { xxs: "column-reverse", md: "row" },
}

export const secondFlex = {
  display: "flex",
  // flex: "0 0 50%",
  flex: "calc((100% - 3rem) / 2)",

  flexDirection: "row",
  gap: "3rem",
}

export const addNewBox = {
  flex: "calc((100% - 3rem) / 2)",
                boxSizing: "border-box",
}
export const userImSx = {
  height: "25rem",
  width: "100%",
  transition: "all 0.3s ease-in-out",
}