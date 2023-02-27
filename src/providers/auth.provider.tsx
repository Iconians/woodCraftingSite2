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
import { newUser, Users } from "../interfaces";

interface AuthContextInterface {
  children?: ReactNode;
  user: object | newUser;
  createUser: (user: newUser, redirectToHome: () => void) => void;
  signinUser: (
    email: string,
    password: string,
    redirectToHome: () => void
  ) => void;
  signoutUser: () => void;
}

const AuthContext = createContext({} as AuthContextInterface);

export const AuthProvider = ({ children }: AuthContextInterface) => {
  const [user, setUser] = useState<object | Users>({});

  const createUser = (user: newUser, redirectToHome: () => void) => {
    fetchUsers().then((data) => {
      const checkForUsers = data.find((item) => item.email === user.email);
      if (!checkForUsers) {
        addUserFetch(user)
          .then((response) => {
            if (response.ok) {
              localStorage.setItem("user", JSON.stringify(user));
              setUser(user);
              redirectToHome();
              toast.success("Created and Account and Logged In");
            }
          })
          .then((data: any) => console.log(data));
      } else {
        toast.error("Account already exist with this email");
      }
    });
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
    setUser({});
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
