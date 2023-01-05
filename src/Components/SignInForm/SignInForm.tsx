export const SignInForm = () => {
  return (
    <div>
      <div className="h2-wrapper">
        <h2>Sign In</h2>
      </div>
      <div className="form-wrapper">
        <form action="" className="form">
          <label htmlFor="username">Username</label>
          <input name="username" type="text" placeholder="Username" />
          <label htmlFor="password">Password</label>
          <input name="password" type="password" placeholder="Password" />
          <input type="submit" value="Sign In" />
        </form>
      </div>
    </div>
  );
};
