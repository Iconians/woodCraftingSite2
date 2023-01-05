import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavButtons.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const NavButtons = () => (
  <div className="nav-btn-wrapper">
    <div className="button-div">
      <Link className="signin-link" to="/Component/SignInPage/SignInPage">
        Sign In
      </Link>
    </div>
    <div className="cart-icon-div">
      <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
    </div>
  </div>
);
