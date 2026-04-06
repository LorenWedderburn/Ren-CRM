import { Link } from "react-router";
import "./Logo.css";

function Logo() {
  return (
    <>
      <Link to="/">
        <img id="logo-image" src="\src\images\Logo.png" alt="logo" />;
      </Link>
    </>
  );
}

export default Logo;
