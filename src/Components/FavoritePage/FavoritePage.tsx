import { useEffect, useState } from "react";
import { fetchFavorites } from "../../fetches/fetchFavorites";
import { fetchFavoriteCarvings } from "../../messaround";
import { useCarvingContext } from "../../providers/carvings.provider";
import { NavBar } from "../NavBar/NavBar";
import { ProductHolder } from "../ProductHolder/ProductHolder";

export const FavoritePage = () => {
  const { carvingArray } = useCarvingContext();
  const [favorites, setFavorites] = useState([]);

  const getUserId = () => {
    const user = localStorage.getItem("user");
    if (user !== null) {
      const userId = JSON.parse(user)["id"];
      return userId;
    }
  };

  // const getfavorites = (favorites) => {
  //   let array = [];
  //   for (let elm of favorites) {
  //     let findCarving = carvingArray.find(
  //       (carving) => carving.id === elm.carvingId
  //     );
  //     console.log(elm, findCarving);
  //     if (findCarving !== undefined) {
  //       array = [...array, findCarving];
  //     }
  //   }
  //   setFavorites(array);
  // };

  useEffect(() => {
    fetchFavorites().then((data) => {
      const user = getUserId();
      const userFavorites = data.filter((favorite) => favorite.userId === user);
      // getfavorites(userFavorites);
      const favorites = fetchFavoriteCarvings(3, carvingArray);
      setFavorites(favorites);
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
            <ProductHolder img={carving.image} id={carving.id} />
          ))
        ) : (
          <h3>
            It looks like you don't have any favorites, please go and find some{" "}
          </h3>
        )}
      </div>
    </div>
  );
};
