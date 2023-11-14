import toast from "react-hot-toast";
import { Carving } from "../interfaces";
import { supabase } from "../supabaseConfig";

export const fetchCarvings = async () => {
  const { data, error } = await supabase.from("carvings").select("*");

  if (error) {
    console.log(error);
    toast.error(error.message);
    throw error;
  }
  return data;
};

// fetchCarvings().then((data) => console.log(data));
