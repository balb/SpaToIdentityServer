import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import authService from './AuthorizeService'

const mgr = authService.getUserManager();

function onLoginClick() {
  mgr.signinRedirect();
}

function onLogoutClick() {
  mgr.signoutRedirect();
}

function Demo(props) {
  const [userInfo, setUserInfo] = useState({
    loggedIn: false,
    userName: null,
  });

  useEffect(() => {
    mgr.getUser().then(function (user) {
      if (user) {
        console.log("User logged in", user.profile.name);
        setUserInfo({
          checked: true,
          loggedIn: true,
          userName: user.profile.name,
        });
      } else {
        console.log("User not logged in");
      }
    });
  }, []);

  if (userInfo.loggedIn) {
    return (
      <div>
        Hello {userInfo.userName}{" "}
        <Button color="primary" onClick={onLogoutClick}>
          Logout
        </Button>
      </div>
    );
  }

  return (
    <Button color="primary" onClick={onLoginClick}>
      Login
    </Button>
  );
}

export default Demo;
