import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "./Account";
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail";

const Settings = () => {
  const { getSession } = useContext(AccountContext);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getSession()
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => console.log(err));
  }, [getSession]);

  return (
    <div>
      {loggedIn && (
        <>
          <h2>Settings</h2>
          <ChangePassword />
          <ChangeEmail />
        </>
      )}
    </div>
  );
};

export default Settings;
