import "./css/AppMain.css";
import UserDetailsBar from "./UserLoginData/UserDetailsBar";
import DataSetDisplay from "./UserLoginData/DataSetDisplay";

function AppMain() {
  return (
    <div className="appmain-div">
      <div className="elements-div">
        <div className="userdetails-div">
          <UserDetailsBar />
        </div>
        <div className="dataset-div">
          <DataSetDisplay />
        </div>
      </div>
    </div>
  );
}

export default AppMain;
