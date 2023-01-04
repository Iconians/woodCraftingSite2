import { CreateAcctForm } from "../CreateAcctForm/CreateAcctForm";
import { NavBar } from "../NavBar/NavBar";
import { SignInForm } from "../SignInForm/SignInForm";
export const SignInPage = () => {
  let signin: boolean = false;
  return (
    <>
      <NavBar />
      {signin ? <SignInForm /> : <CreateAcctForm />}
    </>
  );
};
