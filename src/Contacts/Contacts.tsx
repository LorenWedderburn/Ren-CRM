import "./Contacts.css";
import { useCRM } from "../CRMContext";

function Contacts() {
  const { userData } = useCRM();

  return <div className="contactsmain-div">{`${userData?.firstName}`}</div>;
}

export default Contacts;
