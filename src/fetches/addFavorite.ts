import toast from "react-hot-toast";
import { supabase } from "../supabaseConfig";

export const addFavorite = async (userId: string, id: number) => {
  const { data, error } = await supabase
    .from("favorites")
    .insert([{ user_id: userId, carving_id: id }])
    .select();

  if (error) {
    console.log(error);
    toast.error(error.message);
    throw error;
  }

  // return fetch("http://localhost:3000/favorites", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ userId: userId, carvingId: id }),
  // })
};
