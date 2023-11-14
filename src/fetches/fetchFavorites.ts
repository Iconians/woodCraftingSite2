import toast from "react-hot-toast";
import { Favorite } from "../interfaces";
import { supabase } from "../supabaseConfig";
const loggit = <T>(something: T) => {
  // leave for example of how to console.log in a promise
  console.log(something);
  return something;
};

export const fetchFavorites = async () => {
  const { data, error } = await supabase.from("favorites").select("*");

  if (error) {
    console.log(error);
    toast.error(error.message);
    throw error;
  }
  return data;
  // return fetch("http://localhost:3000/favorites").then((data) => data.json());
  // .then(loggit);
};
