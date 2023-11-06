import axios from "axios";

export default async function deleteUserApi(token,del,notify ) {

  console.log(del, 'del in api.......................')
  console.log(token,'token in api..................')
  try {
    const response = await axios({
      method: "delete",
      url: `http://localhost:5001/admin/delete/${del}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      
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
