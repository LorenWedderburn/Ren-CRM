import "react-day-picker/style.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppMain from "./AppMain";
import Header from "./Fixtures/Header";
import LeftSidebar from "./Fixtures/LeftSidebar";
import Contacts from "./Contacts/Contacts";
import Login from "./Login/Login";
import { type Contact } from "./LoginData";
import { useState } from "react";
import "./css/App.css";
import SelectedDataSetPage from "./DataSetPage/SelectedDataSetPage";

function App() {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState<Contact>();

  function handleUserData(userData: Contact): void {
    setUserData(userData);
  }

  function handleLogin(): void {
    setLogin(!login);
  }

  return (
    <>
      <BrowserRouter>
        {login === false ? (
          <>
            <Header login={login} userData={userData} />
            <div id="app">
              <Login
                handleLogin={handleLogin}
                handleUserData={handleUserData}
              />
            </div>
          </>
        ) : (
          <>
            <Header login={login} userData={userData} />
            <div id="app">
              <LeftSidebar />
              <Routes>
                <Route path="/" element={<AppMain userData={userData!} />} />
                <Route
                  path="contacts"
                  element={<Contacts userData={userData} />}
                />
                <Route
                  path="/:selectedData"
                  element={<SelectedDataSetPage userData={userData} />}
                />
              </Routes>
            </div>
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
