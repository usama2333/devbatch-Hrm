import axios from "axios";

export default async function allUsersApi(token, notify,dispatch,tableActions ) {
  console.log(token,'api.............................')
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:5001/users/allusers",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      
    });

    if (response.status === 200 || response.status === 201) {
     
      console.log(response.data.data,'all users response.......')
     
      // dispatch(tableActions.setShow('USama ahmed'));
      dispatch(tableActions.setData(response.data.data));
     
      
    
    }
  } catch (error) {
    console.log(error.message);
   
   
  }
}
