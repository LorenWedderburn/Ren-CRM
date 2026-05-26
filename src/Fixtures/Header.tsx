import "./Header.css";
import Logo from "./Logo";
import { useCRM } from "../CRMContext";

function Header() {
  const { userData, login } = useCRM();

  return (
    <header>
      <Logo />
      {login ? (
        <div className="userinfo-div">
          <div className="userinfo-textboxes">
            <div className="userinfo-text">{`${userData?.firstName}`}</div>
            <div className="userinfo-text">{`${userData?.jobTitle}`}</div>
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </header>
  );
}

export default Header;
