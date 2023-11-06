import axios from "axios";

export default async function signUpApi(
  data,
  authCtx,
  login,
  naviagte,
  notify,
  Swal
) {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:5001/users/register",
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmpassword,
      },
    });

    if (response.status === 200 || response.status === 201) {
      //   history.replace("/login");
      console.log("signup succesfully");
      console.log(response, "response");
      Swal.fire("Good job!", "Sign up successfully!", "success");
      notify("Signup successfully");
      naviagte("/login");
    }
  } catch (error) {
    console.log(error.message);

    // notify(error.message);
  }
}
