import { useState } from "react";
import { CreateAcctForm } from "../CreateAcctForm/CreateAcctForm";
import { NavBar } from "../NavBar/NavBar";
import { SignInForm } from "../SignInForm/SignInForm";
import "./SignInPage.css";
export const SignInPage = () => {
  const [createAcct, setCreateAcct] = useState<boolean>(false);
  const changeForms = () => {
    setCreateAcct(true);
  };
  return (
    <>
      <NavBar />
      {createAcct ? (
        <CreateAcctForm />
      ) : (
        <SignInForm changeForm={changeForms} />
      )}
    </>
  );
};
