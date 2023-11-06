import axios from "axios";

export default async function updateUserApi(
  token,
  data,
  id,
  naviagte,
  notify,
  editUser
) {
  console.log(id,'update user id.............................')
  console.log(editUser,'update user id lol.............................')
  console.log(token,'update user token.............................')
  console.log(data,'update user data.............................')
  try {
    const response = await axios({
      method: "put",
      url: `http://localhost:5001/admin/update/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
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
      
      naviagte("/user");
      notify("User is updated");
    }
  } catch (error) {
    console.log(error.message);

    // notify(error.message);
  }
}
