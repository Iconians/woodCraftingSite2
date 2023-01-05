import { useState } from "react";
import { NavAcctBtn } from "../NavAcctBtn/NavAcctBtn";
import { NavButtons } from "../NavButtons/NavButtons";
import "./Navbar.css";

export const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <div className="navbar-wrapper">
      <div className="brand-div">WoodCrafting Hobby Site</div>
      <div className="btns">{loggedIn ? <NavAcctBtn /> : <NavButtons />}</div>
    </div>
  );
};
