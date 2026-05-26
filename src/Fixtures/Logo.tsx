import { Link } from "react-router";
import "./Logo.css";
import logoImage from "../images/Logo.png";

function Logo() {
  return (
    <>
      <Link to="/">
        <img id="logo-image" src={logoImage} alt="logo" />
      </Link>
    </>
  );
}

export default Logo;
