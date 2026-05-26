import "react-day-picker/style.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppMain from "./AppMain";
import Header from "./Fixtures/Header";
import LeftSidebar from "./Fixtures/LeftSidebar";
import Contacts from "./Contacts/Contacts";
import Login from "./Login/Login";
import "./css/App.css";
import SelectedDataSetPage from "./DataSetPage/SelectedDataSetPage";
import { useCRM } from "./CRMContext";

function App() {
  const { login } = useCRM();

  return (
    <>
      <BrowserRouter>
        {login === false ? (
          <>
            <Header />
            <div id="app">
              <Login />
            </div>
          </>
        ) : (
          <>
            <Header />
            <div id="app">
              <LeftSidebar />
              <Routes>
                <Route path="/" element={<AppMain />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="/:selectedData" element={<SelectedDataSetPage />} />
              </Routes>
            </div>
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
