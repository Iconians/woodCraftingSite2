import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useAuthContext } from "../../providers/auth.provider";
import { toast } from "react-hot-toast";

const formData = [
  {
    labelName: "name",
    labeltext: "Name",
    inputName: "formName",
    type: "text",
    placeHolder: "Name",
  },
  {
    labelName: "email",
    labeltext: "Email",
    inputName: "email",
    type: "email",
    placeHolder: "Email",
  },
  {
    labelName: "password",
    labeltext: "Password",
    inputName: "password",
    type: "password",
    placeHolder: "Password",
    id: "eye",
  },
  {
    labelName: "confirmpassword",
    labeltext: "Confirm Password",
    inputName: "confirmpassword",
    type: "password",
    placeHolder: "Confirm Password",
  },
];

export const CreateAcctForm = () => {
  const { createUser } = useAuthContext();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const captureInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "formName":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
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

  const handleEye = () => {
    const input: any = document.getElementById("eye");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
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
            <>
              {formData.map((input) => (
                <label htmlFor={input.labelName}>
                  {input.labeltext}
                  <input
                    id={input.id}
                    name={input.inputName}
                    type={input.type}
                    placeholder={input.placeHolder}
                    onChange={captureInput}
                  />
                  {input.inputName === "password" ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      className="eye"
                      onClick={handleEye}
                    />
                  ) : null}
                </label>
              ))}
              <input type="submit" value="Create Account" />
            </>
          </form>
        </div>
      </div>
    </div>
  );
};
