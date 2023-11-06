import axios from "axios";

export default async function checkInApi(
  id,
  token,
  setInitialTime,
  dispatch,
  tableActions,
  notify
  
) {
     console.log(id,token,' values...................')
    
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:5001/users/checkin",
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
      console.log(response.data.status, "Checkin Api response....... data.data");
      console.log(response.data.message, "Checkin Api response....... data.data");
      console.log(response.data.data.status, "Checkin Api response....... status");
     

      if(response.data.status === true) {
        dispatch(tableActions.setCheckin(response.data.data));
        notify(response.data.message);
        dispatch(tableActions.setCheckinstatus(true));
      }
      if(response.data.status === false){
        dispatch(tableActions.setCheckinstatus(false));
        notify(response.data.message);
         dispatch(tableActions.setCheckinstatus(true));
      }
    }
  } catch (error) {
   
    setInitialTime(false);
    notify(error.message);
  }
}
