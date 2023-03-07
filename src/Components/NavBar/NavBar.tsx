import { useState } from "react";
import { useAuthContext } from "../../providers/auth.provider";
import { useCarvingContext } from "../../providers/carvings.provider";
import { CartModal } from "../CartModal/CartModal";
import { NavAcctBtn } from "../NavAcctBtn/NavAcctBtn";
import { NavButtons } from "../NavButtons/NavButtons";
import "./Navbar.css";

export const NavBar = () => {
  const { user } = useAuthContext();
  const { openModal, openCartModal } = useCarvingContext();

  return (
    <>
      <div className="nav-wrapper">
        <div className="navbar-wrapper">
          <div className="brand-div">WoodCrafting Hobby Site</div>
          <div className="btns">
            {user !== undefined ? (
              <NavAcctBtn openCartModal={openCartModal} />
            ) : (
              <NavButtons openCartModal={openCartModal} />
            )}
          </div>
        </div>
      </div>
      <CartModal openModal={openModal} openCartModal={openCartModal} />
    </>
  );
};
