import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../providers/auth.provider";
import { AddCarvingPage } from "../AddCarvingPage/AddCarvingPage";
import "./NavAcctBtn.css";

interface props {
  openCartModal: () => void;
}

export const NavAcctBtn = ({ openCartModal }: props) => {
  const { signoutUser } = useAuthContext();

  const signOut = () => {
    signoutUser();
  };

  return (
    <div className="buttons-wrapper">
      <div className="acct-btn-wrapper">
        <Link className="acct-favorite-btn" to={"/FavoritePage"}>
          Favorites
        </Link>
        <Link to={"/addCarving"} className="acct-favorite-btn">
          {" "}
          Add Carving
        </Link>
        <a onClick={signOut}>Sign Out</a>
      </div>
      <div className="cart-icon-div" onClick={openCartModal}>
        <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
      </div>
    </div>
  );
};
