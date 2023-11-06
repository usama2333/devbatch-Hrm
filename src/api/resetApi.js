import axios from "axios";

export default async function resetApi(
  data,navigate,notify,dispatch,tableActions
 
) {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:5001/users/resetpassword",
      data: {
        email: data.email,
        otp: data.otp,
        newPassword: data.newpassword,
        confirmNewPassword: data.confirmpassword
      },
    });

    if (response.status === 200 || response.status === 201) {
      console.log(response, "Reset response response.......");
  
      notify(response.data.message);
      navigate("/login");
    //   dispatch(tableActions.setReset(false));
      
    }
  } catch (error) {
    console.log(error.message);

    notify(error.message);
  }
}
