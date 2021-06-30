import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { getSession } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    getSession().then(({ user }) => {
      user.changePassword(password, newPassword, (err, result) => {
        if (err) {
          console.error(err);
        } else {
          console.log(result);
        }
      });
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Current Password</label>
        <input
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="password">New Password</label>
        <input
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          type="password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default ChangePassword;
