import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useAuthContext } from "../../providers/auth.provider";
import { toast } from "react-hot-toast";

export const CreateAcctForm = () => {
  const { createUser } = useAuthContext();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const captureInput = ({ target: { name, value } }: any) => {
    console.log(name, value);
    switch (name) {
      case "formName":
        setName(value);
        break;
      case "email":
        setEmail(value);
      case "password":
        setPassword(value);
        break;
      case "confirmpassword":
        setConfirmPassword(value);
        break;
    }
  };

  const newUser = () => {
    if (password === confirmPassword) {
      let newUser = {
        name: name,
        email: email,
        password: password,
      };
      createUser(newUser);
    } else {
      toast.error("passwords don't match");
    }
  };
  return (
    <div>
      <div>
        <div className="h2-wrapper">
          <h2>Create Account</h2>
        </div>
        <div className="form-wrapper">
          <form
            action=""
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              newUser();
            }}
          >
            <FontAwesomeIcon icon={faEye} />
            <label htmlFor="name">Name</label>
            <input
              name="formName"
              type="text"
              placeholder="Name"
              onChange={captureInput}
            />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
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
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              onChange={captureInput}
            />
            <input type="submit" value="Create Account" />
          </form>
        </div>
      </div>
    </div>
  );
};
