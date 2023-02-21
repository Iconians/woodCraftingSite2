import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../providers/auth.provider";
import "./NavAcctBtn.css";

export const NavAcctBtn = ({ openCartModal }: any) => {
  const { user, signoutUser } = useAuthContext();
  const navigate = useNavigate();

  const userSelection = ({ target: { value } }: any) => {
    if (value === "signOut") {
      signoutUser();
    }
    if (value === "favorites") {
      navigate("FavoritePage");
    }
  };

  return (
    <div className="buttons-wrapper">
      <div className="acct-btn-wrapper">
        <select
          onChange={userSelection}
          name="accountSelect"
          id="accountselect"
        >
          <option value="username">{user.name}</option>
          <option value="favorites">Favorites</option>
          <option value="signOut">Sign Out</option>
        </select>
      </div>
      <div className="cart-icon-div" onClick={openCartModal}>
        <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
      </div>
    </div>
  );
};
