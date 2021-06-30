import React, { useState, useContext } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { AccountContext } from "./Account";

const ChangeEmail = () => {
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getSession, authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    getSession().then(({ user, email }) => {
      authenticate(email, password)
        .then(() => {
          const attributes = [
            new CognitoUserAttribute({ Name: "email", Value: newEmail }),
          ];

          user.updateAttributes(attributes, (err, results) => {
            if (err) {
              console.log(err);
            } else {
              console.log(results);
            }
          });
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">New Email</label>
        <input
          value={newEmail}
          type="email"
          onChange={(event) => setNewEmail(event.target.value)}
        />
        <label htmlFor="password">New Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default ChangeEmail;
