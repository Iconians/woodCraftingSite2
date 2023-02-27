import { useState } from "react";
import { CreateAcctForm } from "../CreateAcctForm/CreateAcctForm";
import { NavBar } from "../NavBar/NavBar";
import { SignInForm } from "../SignInForm/SignInForm";
import "./SignInPage.css";
export const SignInPage = () => {
  const [createAcct, setCreateAcct] = useState<boolean>(false);
  const changeForms = () => {
    if (createAcct === false) {
      setCreateAcct(true);
    } else {
      setCreateAcct(false);
    }
  };
  return (
    <>
      <NavBar />
      {createAcct ? (
        <CreateAcctForm changeForm={changeForms} />
      ) : (
        <SignInForm changeForm={changeForms} />
      )}
    </>
  );
};
