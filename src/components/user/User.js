import React, { Fragment } from 'react'
import Users from './Users'

const userData = [
    {
        name : 'Hassan Farooq',
        depart : 'Design',
        date : '01:30 PM, 12/07/2023'
    },
    {
        name : 'Hassan Farooq',
        depart : 'Design',
        date : '01:30 PM, 12/07/2023'
    },
    {
        name : 'Hassan Farooq',
        depart : 'Design',
        date : '01:30 PM, 12/07/2023'
    },
    {
        name : 'Hassan Farooq',
        depart : 'It Network',
        date : '01:30 PM, 12/07/2023'
    },
    {
        name : 'Hassan Farooq',
        depart : 'Consultant',
        date : '01:30 PM, 12/07/2023'
    },
    {
        name : 'Hassan Farooq',
        depart : 'Development',
        date : '01:30 PM, 12/07/2023'
    },
]

const User = () => {
  return (
    <Fragment>
     
     {userData.map((data) => (
        <Users name={data.name} depart={data.depart} date={data.date}/>
     ))}

      
    </Fragment>
  )
}

export default User
