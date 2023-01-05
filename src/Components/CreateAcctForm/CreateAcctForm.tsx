import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CreateAcctForm = () => {
  return (
    <div>
      <div>
        <div className="h2-wrapper">
          <h2>Create Account</h2>
        </div>
        <div className="form-wrapper">
          <form action="" className="form">
            <FontAwesomeIcon icon={faEye} />
            <label htmlFor="name">Name</label>
            <input name="name" type="text" placeholder="Name" />
            <label htmlFor="email">Email</label>
            <input name="email" type="email" placeholder="Email" />
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Password" />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
            />
            <input type="submit" value="Create Account" />
          </form>
        </div>
      </div>
    </div>
  );
};
