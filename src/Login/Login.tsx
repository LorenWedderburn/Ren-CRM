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
    searchUserName = loginBank.filter(
      (currentUser) => currentUser.username === username,
    );
    setUsername("");
    setPassword("");
    console.log(searchUserName);
    getUserData();
    if (password === searchUserName[0].password) {
      handleLogin();
    } else {
      alert("Incorrect Login Details!");
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
          />
        </div>
        <div className="submit-div">
          <button>Sign in</button>
        </div>
      </form>
    </div>
  );
}
