import { useState } from "react";
import { useAuthContext } from "../../providers/auth.provider";

interface props {
  changeForm: () => void;
}

export const SignInForm = ({ changeForm }: props) => {
  const { signinUser } = useAuthContext();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const captureInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);

    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      console.log(value);

      setPassword(value);
    }
  };

  const formSignin = () => {
    signinUser(email, password);
  };

  return (
    <div>
      <div className="h2-wrapper">
        <h2>Sign In</h2>
      </div>
      <div className="form-wrapper">
        <form
          action=""
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            formSignin();
          }}
        >
          <label htmlFor="Email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={captureInput}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={captureInput}
          />
          <input type="submit" value="Sign In" />
        </form>
        <div>
          <button onClick={changeForm}>Create Account</button>
        </div>
      </div>
    </div>
  );
};
