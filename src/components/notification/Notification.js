import React from 'react';

const Notification = ({ notifications }) => {
  return (
    <div>
      {/* <h2>Notifications</h2> */}
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;