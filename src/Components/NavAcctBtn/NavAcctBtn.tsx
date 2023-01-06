import { useAuthContext } from "../../providers/auth.provider";

export const NavAcctBtn = () => {
  const { user } = useAuthContext();
  return (
    <div className="acct-btn-wrapper">
      <select name="accountSelect" id="accountselect">
        <option value="username" disabled>
          {user.name}
        </option>
        <option value="favorites">Favorites</option>
        <option value="Account">Account</option>
        <option value="Sign Out">Sign Out</option>
      </select>
    </div>
  );
};
