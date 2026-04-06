import "./UserDetailsBar.css";
import { type Contact } from "../LoginData";

type UserData = {
  userData: Contact;
};

function UserDetailsBar({ userData }: UserData) {
  return (
    <div className="userdetailsbar-div">
      <div className="userdetailsbar-infodiv">{`${userData.firstName} ${userData.secondName}: ${userData.jobTitle}`}</div>
    </div>
  );
}

export default UserDetailsBar;
