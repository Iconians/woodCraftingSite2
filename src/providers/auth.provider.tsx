import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { addUserFetch } from "../fetches/addUser";
import { toast } from "react-hot-toast";
import { fetchUsers } from "../fetches/fetchUsers";

interface AuthContextInterface {
  children?: ReactNode;
  user: any;
  loggedIn: boolean;
  createUser: any;
  signinUser: any;
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

  const signinUser = (email: string, password: string) => {
    fetchUsers().then((data) => {
      const findAccount = data.find((item: any) => item.email === email);
      console.log(password);
      if (findAccount.password === password) {
        localStorage.setItem("user", JSON.stringify(findAccount));
        setUser(findAccount);
        setLoggedIn(true);
        toast.success("signed In");
      }
    });
  };

  useEffect(() => {
    const userSignIn = localStorage.getItem("user");
    if (userSignIn) {
      setUser(JSON.parse(userSignIn));
      setLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loggedIn,
        createUser,
        signinUser,
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
    signinUser: context.signinUser,
  };
};
