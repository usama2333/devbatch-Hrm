import axios from "axios";

export default async function deleteUserApi(del,notify ) {
  try {
    const response = await axios({
      method: "delete",
      url: `http://localhost:5001/api/users/delete/${del}`,
      
    });

    if (response.status === 200 || response.status === 201) {
     
      console.log(response,'user deleted successfully.......')
      notify('User deleted successfully');
      
    }
  } catch (error) {
    console.log(error.message);
   
    notify(error.message);
  }
}
