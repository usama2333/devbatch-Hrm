import axios from "axios";

export default async function forgotApi(
  data,navigate,notify,dispatch,tableActions,setOttp,setCountdown,ottp
 
) {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:5001/api/users/forgotpassword",
      data: {
        email: data.email,
      },
    });

    if (response.status === 200 || response.status === 201) {
      console.log(response, "Forgot response response.......");
      console.log(response.data.otp, "token..............");
    //   notify(`One Time OTP: ${response.data.otp}`);
    if(ottp) {
        setOttp(response.data.otp);
        setCountdown(15);
    }
   
      dispatch(tableActions.setOtp(response.data));
      dispatch(tableActions.setReset(true));
      navigate("/reset");
      
    }
  } catch (error) {
    console.log(error.message);

    notify(error.message);
  }
}
