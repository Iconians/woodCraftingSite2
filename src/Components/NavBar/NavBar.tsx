import { useState } from "react";
import { NavAcctBtn } from "../NavAcctBtn/NavAcctBtn";
import { NavButtons } from "../NavButtons/NavButtons";

export const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <div className="navbar-wrapper">
      <div className="brand-div">WoodCrafting Hobby Site</div>
      <div className="btns"></div>
      {loggedIn ? <NavAcctBtn /> : <NavButtons />}
    </div>
  );
};
