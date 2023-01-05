import { CreateAcctForm } from "../CreateAcctForm/CreateAcctForm";
import { NavBar } from "../NavBar/NavBar";
import { SignInForm } from "../SignInForm/SignInForm";
import "./SignInPage.css";
export const SignInPage = () => {
  let signin: boolean = true;
  return (
    <>
      <NavBar />
      {signin ? <SignInForm /> : <CreateAcctForm />}
    </>
  );
};
