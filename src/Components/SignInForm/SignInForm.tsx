export const SignInForm = () => {
  return (
    <div>
      <div>
        <h2>Sign In</h2>
      </div>
      <form action="">
        <label htmlFor="username">Username</label>
        <input name="username" type="text" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder="Password" />
      </form>
    </div>
  );
};
