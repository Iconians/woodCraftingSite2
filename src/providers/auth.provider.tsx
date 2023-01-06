import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { addUserFetch } from "../fetches/addUser";
import { toast } from "react-hot-toast";

interface AuthContextInterface {
  children?: ReactNode;
  user: any;
  loggedIn: boolean;
  createUser: any;
}

const AuthContext = createContext({} as AuthContextInterface);

export const AuthProvider = ({ children }: AuthContextInterface) => {
  const [user, setUser] = useState<{}>({});
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const createUser = (user: object) => {
    addUserFetch(user)
      .then((response) => {
        if (response.ok) {
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          setLoggedIn(true);
          toast.success("Created and Account and Logged In");
        }
      })
      .then((data: any) => console.log(data));
  };

  useEffect(() => {
    const userSignIn = localStorage.getItem("user");
    if (userSignIn) {
      setUser(JSON.parse(userSignIn));
      setLoggedIn(true);
      console.log(JSON.parse(userSignIn));
    }
  }, []);

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
