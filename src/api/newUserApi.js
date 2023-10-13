import axios from "axios";

export default async function newUserApi(
  data,
  naviagte,
  notify,
) {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:5001/api/users/createuser",
      data: {
        name: data.name,
        email: data.email,
        designation: data.designation,
        department: data.department,
        gender: data.gender,
        phone: data.phone,
        cnic: data.cnic,
        address: data.address,
      },
    });

    if (response.status === 200 || response.status === 201) {
      console.log("Create user succesfully");
      console.log(response, " create user response...........");
    
      naviagte("/user");
      notify("User is created");
    }
  } catch (error) {
    console.log(error.message);

    notify(error.message);
  }
}
