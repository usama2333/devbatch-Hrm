import axios from "axios";

export default async function loginApi(
  data,
  authCtx,
  login,
  naviagte,
  notify,
  Swal,
  dispatch,tableActions
) {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:5001/api/users/login",
      data: {
        email: data.email,
        password: data.password,
      },
    });

    if (response.status === 200 || response.status === 201) {
      console.log(response, "login response.......");
      console.log(response.data.token, "token..............");
      Swal.fire("Good job!", "Sign in successfully!", "success");
      notify("Login successfully");
      naviagte("/dashboard");
      //   const expirationTime = new Date(
      //     new Date().getTime() + +data.expiresIn * 1000
      //   );
      //   console.log(expirationTime.toISOString(),'expire time..........')
      authCtx.login(
        response.data.token,
      );
      dispatch(tableActions.setNav(response.data.payload));
    }
  } catch (error) {
    console.log(error.message);

    notify(error.message);
  }
}
