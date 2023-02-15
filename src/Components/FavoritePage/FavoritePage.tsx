import { useEffect, useState } from "react";
import { fetchFavorites } from "../../fetches/fetchFavorites";
import { NavBar } from "../NavBar/NavBar";

const [favorites, setFavorites] = useState([]);

const getUserId = () => {
  const user = localStorage.getItem("user");
  if (user !== null) {
    const userId = JSON.parse(user)["id"];
    return userId;
  }
};

useEffect(() => {
  fetchFavorites().then((data) => {
    const findUserfavorites = data.map(
      (carving: { userId: number; carvingId: number }) =>
        carving.userId === getUserId()
    );
    const getfavorites = findUserfavorites;
    // setFavorites()
  });
}, []);

export const FavoritePage = () => {
  return (
    <div className="favorite-page-wrapper">
      <NavBar />
      <div className="heading-wrapper">
        <h2>Favorites</h2>
      </div>
      <div className="favorites-wrapper">{}</div>
    </div>
  );
};
