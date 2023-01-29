import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCarvingContext } from "../../providers/carvings.provider";
import { NavBar } from "../NavBar/NavBar";
import "./ProductPage.css";

export const ProductPage = () => {
  const location = useLocation();
  const { carvingArray } = useCarvingContext();
  const [favorite, setFavorite] = useState<boolean>(false);
  const [favoriteArray, setFavoriteArray] = useState<
    { carvingId: number; userId: number; id: number }[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:3000/favorites").then((data) =>
      data.json().then((data) => {
        setFavoriteArray(data);
        findFavorites();
      })
    );
  }, []);

  const getUserId = () => {
    const user = localStorage.getItem("user");
    if (user !== null) {
      const userId = JSON.parse(user)["id"];
      return userId;
    }
  };

  const findFavorites = () => {
    const userId = getUserId();
    const favs = favoriteArray.filter((favorite) => favorite.userId === userId);
    if (favs.length) {
      setFavoriteArray(favs);
      setFavorite(true);
      console.log(favs);
    }
  };

  const addToFavorites = (e: any) => {
    const id = e.target.id;
    const userId = getUserId();
    fetch("http://localhost:3000/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId, carvingId: parseInt(id) }),
    }).then((res) => console.log(res));
    setFavorite(true);
  };

  const deleteAFavorites = (e: any) => {
    const id = e.target.id;
    const userId = getUserId();
    const getFavorite = favoriteArray.find(
      (favorite) => favorite.carvingId === parseInt(id)
    );
    console.log(getFavorite, id, favoriteArray);
    if (getFavorite !== undefined)
      return fetch(`http://localhost:3000/favorites/${getFavorite.id}`, {
        method: "DELETE",
      });
  };

  return (
    <div className="product-page-wrapper" id="productPage">
      <NavBar />
      {carvingArray.map((carving) =>
        carving.id === location.state.productId ? (
          <>
            <div className="h2-wrapper" key={carving.id}>
              <h2>{carving.carvingName}</h2>
            </div>
            <div className="product-img-wrapper">
              <img src={carving.image} alt="" />
            </div>
            <div className="story-div">
              <p>{carving.story}</p>
            </div>
            <div className="buttons-container">
              {favorite ? (
                <button id={`${carving.id}`} onClick={deleteAFavorites}>
                  unFavorite
                </button>
              ) : (
                <button id={`${carving.id}`} onClick={addToFavorites}>
                  Favorite
                </button>
              )}
              {carving.price ? (
                <button>{`Add to Cart ${carving.price}`}</button>
              ) : null}
            </div>
          </>
        ) : null
      )}
    </div>
  );
};
