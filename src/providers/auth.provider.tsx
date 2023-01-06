import { Context, createContext, ReactNode, useContext, useState } from "react";
import { addUserFetch } from "../fetches/addUser";

interface AuthContextInterface {
  children?: ReactNode;
  user: {};
  loggedIn: boolean;
  createUser: any;
}

const AuthContext = createContext({} as AuthContextInterface);

export const AuthProvider = ({ children }: AuthContextInterface) => {
  const [user, setUser] = useState<{}>({});
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const createUser = (user: object) => {
    addUserFetch(user).then((data: any) => console.log(data));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loggedIn,
        createUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return {
    user: context.user,
    loggedIn: context.loggedIn,
    createUser: context.createUser,
  };
};
