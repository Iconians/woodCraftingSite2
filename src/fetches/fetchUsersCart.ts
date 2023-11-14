import toast from "react-hot-toast";
import { userCart } from "../interfaces";
import { supabase } from "../supabaseConfig";

export const fetchUsersCart = async () => {
  let { data, error } = await supabase.from("users_cart").select("*");

  if (error) {
    console.log(error);
    toast.error(error.message);
    throw error;
  }
  return data;
  // return fetch("http://localhost:3000/userCart").then((res) => res.json());
};
