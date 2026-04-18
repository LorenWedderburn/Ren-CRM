import "./Header.css";
import { type Contact } from "../LoginData";
import Logo from "./Logo";

type UserData = {
  userData?: Contact;
  login: boolean;
};

function Header({ userData, login }: UserData) {
  return (
    <header>
      <Logo />

      {login ? (
        <>
          <div className={login ? "userinfo-div" : ""}>
            <div className="userinfo-textboxes">
              <div className="userinfo-text">{`${userData?.firstName}`}</div>
              <div className="userinfo-text">{`${userData?.jobTitle}`}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div> </div>
        </>
      )}
    </header>
  );
}

export default Header;
