import { Carving } from "../interfaces";

export const fetchCarvings = (): Promise<Carving[]> => {
  return fetch("http://localhost:3000/carvings").then((res) => res.json());
};
