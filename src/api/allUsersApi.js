import axios from "axios";

export default async function allUsersApi(notify, dispatch,tableActions ) {
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:5001/api/users/allusers",
      
    });

    if (response.status === 200 || response.status === 201) {
     
      console.log(response.data.data,'all users response.......')
      dispatch(tableActions.setData(response.data.data));
     
      
    
    }
  } catch (error) {
    console.log(error.message);
   
    notify(error.message);
  }
}
