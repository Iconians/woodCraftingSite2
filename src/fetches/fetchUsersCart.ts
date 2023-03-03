import { userCart } from "../interfaces";

export const fetchUsersCart = (): Promise<userCart[]> => {
  return fetch("http://localhost:3000/userCart").then((res) => res.json());
};
