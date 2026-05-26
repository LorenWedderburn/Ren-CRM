import React, { useState } from "react";
import { loginBank, contactBank } from "../LoginData";
import "./Login.css";
import { useCRM } from "../CRMContext";

export default function Login() {
  const { setUserData, handleLogin } = useCRM();
  const [username, setUsername] = useState<string>("LWed");
  const [password, setPassword] = useState<string>("Crumble");
  const [error, setError] = useState<string>("");

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>): void {
    e.preventDefault();
    setError("");

    const matchedUser = loginBank.find(
      (currentUser) => currentUser.username === username,
    );

    if (!matchedUser) {
      setError("Username not found.");
      return;
    }

    if (password !== matchedUser.password) {
      setError("Incorrect Login Details!");
      setPassword("");
      return;
    }

    const userData = contactBank.find((c) => c.id === matchedUser.id);
    setUserData(userData!);
    handleLogin();
    setUsername("");
    setPassword("");
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
        {error && <p className="login-error">{error}</p>}
      </form>
    </div>
  );
}
