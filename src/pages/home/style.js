
import usamaPic from '../../assests/images/usamaPic.jpg';
import viewProfile from '../../assests/images/viewProfile.png';
import logo from "../../assests/images/logo.png";
import dashboard from "../../assests/images/dashboard.png";
import user from "../../assests/images/user.png";
import line from "../../assests/images/line.png";
import flower from "../../assests/images/flower.png";
export {logo,dashboard,user,line,flower}
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

export const relBox = {
    
    mr: { xxs: "1rem",xs: "1rem", sm: "2rem", md: "0rem" },
    mt: "3rem",
    position: "relative",
}

export const transitionBox = {
    height: {xxs : '4rem' , sm : '5.4rem'},
    width: {xxs : '4rem' , sm : '5.4rem'},
    position: "absolute",
    backfaceVisibility : 'hidden',
    transition: 'all 0.3s ease-in-out',
    right : {xxs : '-3rem',xs : '-3rem',sm : '-5rem', md : '-2.25rem'},
    mt: "30px",
    background: "#FE8062 0% 0% no-repeat padding-box",
    boxShadow: "-5px 0px 6px #0000000D",
    opacity: 1,
    borderRadius: "100%",
    cursor: "pointer",
    display: "grid",
    placeContent: "center",
}



export const tableDummy = [
  {

    id : 1,
    name : "Hassan Farooq",
    email : 'hassan@gamil.com',
    designation : 'Web Developer',
    status:"Activated",
    department : "IT",
    gender : 'male',
    image : viewProfile,
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
    designation : 'Software Engineer',
    status:"Activated",
    department : "Engineering",
    gender : 'male',
    image : usamaPic,
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
    designation : 'Doctor',
    status:"Activated",
    department : "Medical",
    gender : 'male',
    image : viewProfile,
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
    designation : 'Backend Developer',
    status:"Deactivated",
    department : "Computer Science",
    gender : 'male',
    image : viewProfile,
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
    designation : 'SQA',
    status:"Activated",
    department : "Computer Science",
    gender : 'female',
    image : viewProfile,
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
    designation : 'React Native',
    status:"Deactivated",
    department : "IT",
    gender : 'male',
    image : viewProfile,
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
    designation : 'Frontend Developer',
    status:"Activated",
    department : "Computer Science",
    gender : 'Female',
    image : viewProfile,
    phone : '3000345678',
    cnic : '3333333987654',
    address : 'Lahore',
    created:"12-20-2023",
    deactive:"13-20-2023",
    actions:"Actions",
    time:"10:30AM"
  },
  { 
    id : 8,
      name : "Usama Ahmed",
      email : 'usama@gamil.com',
      designation : 'Software Engineer',
      status:"Activated",
      department : "Engineering",
      gender : 'male',
      image : usamaPic,
      phone : '3000764339',
      cnic : '3333333333333',
      address : 'Lahore , Johar Town',
      created:"12-20-2023",
      deactive:"13-20-2023",
      actions:"Actions",
      time:"09:50AM"
    },
  
];