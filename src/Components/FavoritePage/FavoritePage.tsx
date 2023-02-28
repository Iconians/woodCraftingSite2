import { useEffect, useState } from "react";
import { Carving } from "../../interfaces";
import { useFavoriteContext } from "../../providers/favorites.provider";
import { NavBar } from "../NavBar/NavBar";
import { ProductHolder } from "../ProductHolder/ProductHolder";
import "./FavoritePage.css";

export const FavoritePage = () => {
  const { fetchFavoriteCarvings } = useFavoriteContext();
  const [favorites, setFavorites] = useState<Carving[]>([]);

  useEffect(() => {
    fetchFavoriteCarvings().then((data) => {
      setFavorites(data);
    });
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
            <ProductHolder
              img={carving.image}
              id={carving.id}
              key={carving.id}
            />
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
