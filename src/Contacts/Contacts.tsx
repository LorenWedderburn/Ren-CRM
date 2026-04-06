import "./Contacts.css";
import { type Contact } from "../LoginData";

type UserData = {
  userData: Contact;
};

function Contacts({ userData }: UserData) {
  return <div className="contactsmain-div">{`${userData.firstName}`}</div>;
}

export default Contacts;
