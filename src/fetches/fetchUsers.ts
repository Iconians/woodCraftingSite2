import { Users } from "../interfaces";

export const fetchUsers = (): Promise<Users[]> => {
  return fetch("http://localhost:3000/users").then((res) => res.json());
};
