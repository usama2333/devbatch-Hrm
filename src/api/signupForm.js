
// export default function signUpData(data, authCtx, login, naviagte,notify,Swal) {
//   let url;
//   if (login) {
//     url =
//       "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD6AVseeLPox1In3qGV7-U1UReJC-pdjR4";
//   } else {
//     url =
//       "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD6AVseeLPox1In3qGV7-U1UReJC-pdjR4";
//   }

//   fetch(url, {
//     method: "POST",
//     body: JSON.stringify({
//       email: data.email,
//       password: data.password,
//       returnSecureToken: true,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => {
//       if (res.status === 200 || res.status === 201) {
       
//         console.log("successfull");
//         if (login) {
//           Swal.fire(
//             'Good job!',
//             'Logged in successfully!',
//             'success'
//           )
//           notify('Login successfully')
//           naviagte("/dashboard");
          
//         } else {
//           Swal.fire(
//             'Good job!',
//             'Sign up successfully!',
//             'success'
//           )
//           notify('Signup successfully')
//           naviagte("/login");
          
//         }
//         return res.json();
//       } else {
//         return res.json().then((data) => {
//           let errorMessage = "Authentication failed!";
//           throw new Error(errorMessage);
//         });
//       }
//     })
//     .then((data) => {
//       const expirationTime = new Date(
//         new Date().getTime() + +data.expiresIn * 1000
//       );
//       console.log(expirationTime.toISOString(),'expire time..........')
//       authCtx.login(data.idToken, expirationTime.toISOString());
//     })
//     .catch((err) => {
//       // alert(err.message);
//       notify(err.message)
//     });
// }
