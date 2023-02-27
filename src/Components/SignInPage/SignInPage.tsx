import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateAcctForm } from "../CreateAcctForm/CreateAcctForm";
import { NavBar } from "../NavBar/NavBar";
import { SignInForm } from "../SignInForm/SignInForm";
import "./SignInPage.css";
export const SignInPage = () => {
  const [createAcct, setCreateAcct] = useState<boolean>(false);
  const navigate = useNavigate();
  const changeForms = () => {
    if (createAcct === false) {
      setCreateAcct(true);
    } else {
      setCreateAcct(false);
    }
  };

  const redirectToHome = () => navigate("/");
  return (
    <>
      <NavBar />
      {createAcct ? (
        <CreateAcctForm
          changeForm={changeForms}
          redirectToHome={redirectToHome}
        />
      ) : (
        <SignInForm changeForm={changeForms} redirectToHome={redirectToHome} />
      )}
    </>
  );
};
