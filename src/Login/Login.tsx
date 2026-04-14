import React, { useState } from "react";
import {
  loginBank,
  contactBank,
  type LoginDetails,
  type Contact,
} from "../LoginData";
import "./Login.css";

type Login = {
  handleLogin: () => void;
  handleUserData: (userData: Contact) => void;
};

export default function Login({ handleLogin, handleUserData }: Login) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  let searchUserName: LoginDetails[];

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>): void {
    e.preventDefault();

    findUsername();
  }

  function getUserData(): void {
    const userData: Contact[] = contactBank.filter(
      (current) => current.id === searchUserName[0].id,
    );
    handleUserData(userData[0]);
  }

  function findUsername(): void {
    const currentPassword = password; // capture before any state updates
    const currentUsername = username;

    searchUserName = loginBank.filter(
      (currentUser) => currentUser.username === currentUsername,
    );

    if (searchUserName.length === 0) {
      alert("Username not found.");
      return;
    }

    console.log(searchUserName);

    if (currentPassword === searchUserName[0].password) {
      getUserData();
      handleLogin();
      setUsername("");
      setPassword("");
    } else {
      alert("Incorrect Login Details!");
      setPassword("");
    }
  }

  return (
    <div className="loginmain-div">
      <form className="form-div" onSubmit={handleSubmit}>
        <div className="username-div">
          <label>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            minLength={4}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="password-div">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            minLength={4}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="submit-div">
          <button>Sign in</button>
        </div>
      </form>
    </div>
  );
}
