import axios from "axios";

export default async function checkInApi(
  id,
  token,
  dispatch,tableActions
  
) {
     console.log(id,token,' values...................')
    
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:5001/api/users/checkin",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      data: {
        userId: id
      },
      
    });

    if (response.status === 200 || response.status === 201) {
      console.log(response, "Checkin Api response....... success");

    }
  } catch (error) {
    console.log(error.message,'Check in error...............');

    // notify(error.message);
  }
}
