import { createContext, useContext, useEffect, useState } from "react";
import { addUserFetch } from "../fetches/addUser";
import { toast } from "react-hot-toast";
import { fetchUsers } from "../fetches/fetchUsers";
import { newUser, userCart, Users } from "../interfaces";

interface AuthContextInterface {
  user: Users | undefined;
  createUser: (user: newUser, redirectToHome: () => void) => void;
  signinUser: (
    email: string,
    password: string,
    redirectToHome: () => void
  ) => void;
  signoutUser: () => void;
}

type AuthProviderProps = {
  children?: JSX.Element | JSX.Element[];
};

const AuthContext = createContext({} as AuthContextInterface);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<Users>();

  const findUser = async (newUser: newUser) => {
    return await fetchUsers().then((data) => {
      return data.find((item) => item.email === newUser.email);
    });
  };

  const addUserToDB = async (
    checkForUsers: Users | undefined,
    user: newUser
  ) => {
    if (!checkForUsers) {
      return await addUserFetch(user).then((response) => {
        if (response.ok) {
          return true;
        } else {
          return false;
        }
      });
    }
  };

  const createUser = async (user: newUser, redirectToHome: () => void) => {
    const getAllUsers = await fetchUsers();
    const checkForUsers = getAllUsers.find((item) => item.email === user.email);
    const addUser = await addUserToDB(checkForUsers, user);
    const getUser = await findUser(user);
    if (addUser === true && getUser !== undefined) {
      localStorage.setItem("user", JSON.stringify(getUser));
      console.log(getUser);
      setUser(getUser);
      redirectToHome();
      toast.success("Created and Account and Logged In");
    } else {
      toast.error("Account already exist with this email");
    }
  };

  const signinUser = (
    email: string,
    password: string,
    redirectToHome: () => void
  ) => {
    fetchUsers().then((data) => {
      const findAccount = data.find((item) => item.email === email);
      if (findAccount !== undefined) {
        if (findAccount.password === password) {
          localStorage.setItem("user", JSON.stringify(findAccount));
          setUser(findAccount);
          redirectToHome();
          toast.success("signed In");
        } else {
          toast.error("Incorrect Password");
        }
      } else {
        toast.error("No Account Found");
      }
    });
  };

  const signoutUser = () => {
    setUser(undefined);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const userSignIn = localStorage.getItem("user");
    if (userSignIn) {
      setUser(JSON.parse(userSignIn));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        createUser,
        signinUser,
        signoutUser,
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
    createUser: context.createUser,
    signinUser: context.signinUser,
    signoutUser: context.signoutUser,
  };
};
