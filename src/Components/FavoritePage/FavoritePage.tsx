import { useEffect, useState } from "react";
import { Carving } from "../../interfaces";
import { fetchFavoriteCarvings } from "../../messaround";
import { useCarvingContext } from "../../providers/carvings.provider";
import { NavBar } from "../NavBar/NavBar";
import { ProductHolder } from "../ProductHolder/ProductHolder";
import "./FavoritePage.css";
// find bug that's affecting the refresh btn

export const FavoritePage = () => {
  const { carvingArray } = useCarvingContext();
  const [favorites, setFavorites] = useState<Carving[]>([]);

  const getUserId = () => {
    const user = localStorage.getItem("user");
    if (user !== null) {
      const userId = JSON.parse(user)["id"];
      return userId;
    }
  };

  useEffect(() => {
    const user = getUserId();
    fetchFavoriteCarvings(user).then(
      (data) => {}
      // setFavorites(data)
    );
  }, []);

  return (
    <div className="favorite-page-wrapper">
      <NavBar />
      <div className="heading-wrapper">
        <h2>Favorites</h2>
      </div>
      <div className="favorites-wrapper">
        {favorites.length ? (
          favorites.map((carving) => (
            <ProductHolder img={carving.image} id={carving.id} />
          ))
        ) : (
          <h3>
            It's lonely in here, please go and find some carving's you like{" "}
          </h3>
        )}
      </div>
    </div>
  );
};
