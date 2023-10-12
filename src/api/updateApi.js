import axios from "axios";

export default async function updateUserApi(
  data,
  id,
  naviagte,
  notify,
) {
  try {
    const response = await axios({
      method: "put",
      url: `http://localhost:5001/api/users/update/${id}`,
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
      console.log("updates user succesfully");
      console.log(response, " updated user response...........");
    //   notify("User is creates");
      naviagte("/user");
    }
  } catch (error) {
    console.log(error.message);

    // notify(error.message);
  }
}
