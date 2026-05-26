import "./UserDetailsBar.css";
import { useCRM } from "../CRMContext";

function UserDetailsBar() {
  const { userData } = useCRM();

  return (
    <div className="userdetailsbar-div">
      <div className="userdetailsbar-infodiv">{`${userData?.firstName} ${userData?.secondName}: ${userData?.jobTitle}`}</div>
    </div>
  );
}

export default UserDetailsBar;
