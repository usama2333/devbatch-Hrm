import axios from "axios";

export default async function checkTimeApi(id,token,dispatch,tableActions ) {
  try {
    console.log(id,'id//////////////////////')
    const response = await axios({
      method: "get",
      url: `http://localhost:5001/users/timelog/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      data: {
        userId: id
      },
    });

    if (response.status === 200 || response.status === 201) {
     
      console.log(response.data.data[0],'Check time successfully.......test...........')
      dispatch(tableActions.setCheckin(response.data.data[0]));
      dispatch(tableActions.setChecktime(response.data.message));
    //   notify('User deleted successfully');
      
    }
  } catch (error) {
    console.log(error.message,'Check time Api......');
   
    // notify(error.message);
  }
}
