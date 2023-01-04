import { Link } from "react-router-dom";
import "./NavButtons.css";

export const NavButtons = () => (
  <div className="nav-btn-wrapper">
    <div className="button-div">
      <Link className="signin-link" to="/Component/SignInPage/SignInPage">
        Sign In
      </Link>
    </div>
    <div className="cart-icon-div"></div>
  </div>
);
