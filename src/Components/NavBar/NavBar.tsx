import { useState } from "react";
import { useAuthContext } from "../../providers/auth.provider";
import { CartModal } from "../CartModal/CartModal";
import { NavAcctBtn } from "../NavAcctBtn/NavAcctBtn";
import { NavButtons } from "../NavButtons/NavButtons";
import "./Navbar.css";

export const NavBar = () => {
  const { loggedIn } = useAuthContext();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const openCartModal = () => {
    if (openModal === false) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  };
  return (
    <>
      <div className="nav-wrapper">
        <div className="navbar-wrapper">
          <div className="brand-div">WoodCrafting Hobby Site</div>
          <div className="btns">
            {loggedIn ? (
              <NavAcctBtn openCartModal={openCartModal} />
            ) : (
              <NavButtons openCartModal={openCartModal} />
            )}
          </div>
        </div>
        <CartModal openModal={openModal} openCartModal={openCartModal} />
      </div>
    </>
  );
};
