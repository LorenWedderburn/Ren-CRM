import "./css/AppMain.css";
import UserDetailsBar from "./UserLoginData/UserDetailsBar";
import { type Contact } from "./LoginData";
import DataSetDispay from "./UserLoginData/DataSetDisplay";

type UserData = {
  userData: Contact;
};

function AppMain({ userData }: UserData) {
  return (
    <div className="appmain-div">
      <div className="elements-div">
        <div className="userdetails-div">
          <UserDetailsBar userData={userData} />
        </div>
        <div className="dataset-div">
          <DataSetDispay userData={userData} />
        </div>
      </div>
    </div>
  );
}

export default AppMain;
