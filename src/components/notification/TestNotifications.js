import React, { useState } from "react";
import { Button, Badge, IconButton, Menu, MenuItem, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Notification from "./Notification";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { notificationData } from "./style";
import { menuItemSx } from "../navbar/style";
function TestNotifications() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([...notificationData]);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotification = () => {
    // Simulate receiving a notification; you can replace this with actual data
    // const newNotification = `New notification ${notifications.length + 1}`;
    // setNotifications([...notifications, newNotification]);
    setNotifications([]);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="notifications"
        aria-controls="notifications-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {/* <Badge badgeContent={notifications.length} color="error">
          <NotificationsIcon />
        </Badge> */}
        <Badge
          badgeContent={notifications.length ? notifications.length : 0}
          color="error"
        >
          <NotificationsNoneIcon
            sx={{ color: "#FE8062 ", width: "40px", height: "40px" }}
          />
        </Badge>
      </IconButton>
      <Menu
        id="notifications-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            // backgroundColor: "#FE8062",
            boxSizing: "border-box",
            margin: "0px",
          }}
        >
          {notifications.map((notification, index) => (
            <MenuItem sx={menuItemSx} key={index}>
              {notification}
            </MenuItem>
          ))}
          {notifications.length === 0 && (
            <MenuItem sx={menuItemSx}>No new notifications</MenuItem>
          )}
          <MenuItem
            sx={{
              padding: "1rem 3rem",
              font: "normal normal normal 14px/16px Product Sans",
            }}
            onClick={handleNotification}
          >
            Close notifications
          </MenuItem>
        </Box>
      </Menu>
      {/* <Notification notifications={notifications} /> */}
    </div>
  );
}

export default TestNotifications;
