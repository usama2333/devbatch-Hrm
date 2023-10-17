import axios from "axios";

export default async function checkOutApi(
  id,
  token,
  dispatch,tableActions
  
) {
     console.log(id,token,' values...................')
    
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:5001/api/users/checkout",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      data: {
        userId: id
      },
      
    });

    if (response.status === 200 || response.status === 201) {
      console.log(response.data, "Checkout Api response....... success");
      dispatch(tableActions.setCheckin(response.data.data));
    }
  } catch (error) {
    console.log(error.message,'Check out in error...............');

    // notify(error.message);
  }
}
