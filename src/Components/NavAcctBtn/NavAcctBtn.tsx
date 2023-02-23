import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../providers/auth.provider";
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
        <Link to={"/FavoritePage"}>Favorites</Link>
        <button onClick={signOut}>Sign Out</button>
      </div>
      <div className="cart-icon-div" onClick={openCartModal}>
        <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
      </div>
    </div>
  );
};
