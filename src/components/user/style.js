import { Box } from "@mui/material";
import eyes from "../../assests/images/eye.png";
import bin from "../../assests/images/bin.png";
import edit from "../../assests/images/edit.png";
import leftArrow from "../../assests/images/leftArrow.png";
import rightArrow from "../../assests/images/rightArrow.png";
export {eyes,bin,edit,leftArrow,rightArrow}

export const redBox = (
  <Box
    sx={{
      background: "#F45744 0% 0% no-repeat padding-box",
      width: "10px",
      height: "10px",
      borderRadius: "100%",
    }}
  ></Box>
);

export const yellowBox = (
  <Box
    sx={{
      background: "#a8fe62 0% 0% no-repeat padding-box",
      width: "10px",
      height: "10px",
      borderRadius: "100%",
    }}
  ></Box>
);

export const conBox = {
  width: "94%",
  // height: "379px",
  margin: "0px auto",
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  border: "1px solid #EAEAEA",
  borderRadius: "4px",
  opacity: 1,
  mt: { xxs: "1rem", sm: "5rem" },
  pb: "2rem",
}

export const flexBox = {
  width: "96%",
  margin: "0px auto",
  mt: "2rem",
  display: "flex",
  flexDirection: { xxs: "column", sm: "row" },
  justifyContent: "space-between",
  maxWidth: "100%",
  gap: { xxs: 1, sm: 0 },
}

export const addUserBtn = {
  background: "#FE8062 0% 0% no-repeat padding-box",
  font: "normal normal normal 12px/14px Product Sans",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#d66145", // Define the hover effect style
  },
  // width : '50%',
  display: "flex",
  alignSelf: "end",
  mr: { xxs: "2rem", sm: "0rem" },
  
}

export const tabCon = {
  overflowX: "scroll",
  overflowY: "scroll",
  overflow: "auto",
  maxHeight: { xl: 390, lg: 290, md: 282, xxs: 357 },
  maxWidth: { md: 1280, sm: 530, xs: 370, xxs: 260 },
  margin: "0 auto",
}

export const tableOuterBox = {
  width: "96%",
  margin: "0px auto",
  mt: "2rem",
}

export const rows = [
  {

    id : 1,
    name : "Hassan Farooq",
    email : 'hassan@gamil.com',
    desgination : 'Web Developer',
    status:"Activated",
    department : "Development",
    gender : 'male',
    image : '',
    phone : '3000000000',
    cnic : '3333333333333',
    address : 'Lahore garden town',
    created:"12-20-2023",
    deactive:"13-20-2023",
    actions:"Actions",
    time:"10:10AM"
  },
 { 

  id : 2,
    name : "Usama Ahmed",
    email : 'usama@gamil.com',
    desgination : 'Software Engineer',
    status:"Activated",
    department : "Engineering",
    gender : 'male',
    image : '',
    phone : '3000764339',
    cnic : '3333333333333',
    address : 'Lahore , Johar Town',
    created:"12-20-2023",
    deactive:"13-20-2023",
    actions:"Actions",
    time:"09:50AM"
  },
  {
    id : 3,
    name : "Haseeb Ahmed",
    email : 'haseeb@gamil.com',
    desgination : 'Doctor',
    status:"Activated",
    department : "Medical",
    gender : 'male',
    image : '',
    phone : '3000764338',
    cnic : '3333333322222',
    address : 'Bahria Town , Lahore',
    created:"12-20-2023",
    deactive:"13-20-2023",
    actions:"Actions",
    time:"12:00AM"
  },
  {
    id : 4,
    name : "Shama ul haq",
    email : 'shamas@gamil.com',
    desgination : 'Backend Developer',
    status:"Deactivated",
    department : "Computer Science",
    gender : 'male',
    image : '',
    phone : '3070000000',
    cnic : '33333311111111',
    address : 'Gulberg II ,Lahore ',
    created:"12-20-2023",
    deactive:"13-20-2023",
    actions:"Actions",
    time:"09:10AM"
  },
  {
    id : 5,
    name : "Maria Ali",
    email : 'maria@gamil.com',
    desgination : 'SQA',
    status:"Activated",
    department : "Testing",
    gender : 'female',
    image : '',
    phone : '3000111111',
    cnic : '3333333335566',
    address : 'Model town , Lahore',
    created:"12-20-2023",
    deactive:"13-20-2023",
    actions:"Actions",
    time:"12:20AM"
  },
  {

    id : 6,
    name : "Samama Zargham",
    email : 'Sam@gamil.com',
    desgination : 'React Native',
    status:"Deactivated",
    department : "Development",
    gender : 'male',
    image : '',
    phone : '3012345678',
    cnic : '3333333333399',
    address : 'G1 , Lahore',
    created:"12-20-2023",
    deactive:"13-20-2023",
    actions:"Actions",
    time:"09:40AM"
  },
 { 

  id : 7,
    name : "Ayesha",
    email : 'Ayesha@gamil.com',
    desgination : 'Frontend Developer',
    status:"Activated",
    department : "Development",
    gender : 'Female',
    image : '',
    phone : '3000345678',
    cnic : '3333333987654',
    address : 'Lahore',
    created:"12-20-2023",
    deactive:"13-20-2023",
    actions:"Actions",
    time:"10:30AM"
  },
  
];

export const tableHeader = {
  font: "normal normal bold 13px/15px Product Sans",
  letterSpacing: "0px",
  color: "#2D2D2D",
  opacity: 1,
};

export const tableBodyText = {
  font: "normal normal normal 13px/15px Product Sans",
  letterSpacing: "0px",
  color: "#2D2D2D",
  opacity: 1,
  
};

export const backColor = {
  width: "2.5rem",
  height: "2.5rem",
  background: "#FE8062 0% 0% no-repeat padding-box",

  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

export const backText = {
  font: "normal normal normal 8px Product Sans",
  letterSpacing: "0px",
  color: "#FFFFFF",
};

export const normalColor = {
  width: "2.5rem",
  height: "2.5rem",
  // background: "#FE8062 0% 0% no-repeat padding-box",

  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

export const normalText = {
  font: "normal normal normal 8px Product Sans",
  letterSpacing: "0px",
  color: "#707787",
};

export const customPagination = {
  "& .MuiSvgIcon-root": {
    backgroundColor: "#FE8062",
    borderRadius: "4px",
    color: "#FFFFFF",
    padding: "0.4rem",
  },
  
  "& .MuiSelect-icon": {
    display: "none",
  },
  "& .MuiSelect-select": {
    mr: {xxs : '0rem', sm : '6rem',md : '7rem'},
    borderRadius: "4px",
    border: "2px solid #EAEAEA",
    padding : {xxs : '0.5rem',sm : '0.5rem 4rem 0.5rem 4rem'},
    "&::after": {
      content: '"Rows"',
      pl: "0.2rem",
    },
   
  },
  "& .MuiToolbar-root": {
    // backgroundColor: 'red',

    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  "& .css-pdct74-MuiTablePagination-selectLabel": {
    display: "none",
  },
}
