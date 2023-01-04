export const CreateAcctForm = () => {
  return (
    <div>
      <div>
        <h2>Create Account</h2>
        <form action="">
          <label htmlFor="name">Name</label>
          <input name="name" type="text" placeholder="Name" />
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <input name="password" type="password" placeholder="Password" />
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input name="confirmpassword" type="password" />
        </form>
      </div>
    </div>
  );
};
