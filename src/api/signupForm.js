import { useState, useContext } from 'react';


export default function signUpData(data, history,authCtx,login,notify ) {
    let url;
    if(login) {

      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD6AVseeLPox1In3qGV7-U1UReJC-pdjR4';
    
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD6AVseeLPox1In3qGV7-U1UReJC-pdjR4';
      
    }
  
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
        
          if (res.ok) {
            console.log('successfull')
            if(login) {
                history.push('/home');
            }else {
                history.push('/login');
            }
            return res.json();
           
          } else {
            return res.json().then((data) => {
                console.log(data,'data..............')
              let errorMessage = 'Authentication failed!';
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );
          authCtx.login(data.idToken, expirationTime.toISOString());
          
        })
        .catch((err) => {
          alert(err.message);
        });
}
