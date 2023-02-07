import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { addFavorite } from "../../fetches/addFavorite";
import { deleteFetch } from "../../fetches/deleteFetch";
import { fetchFavorites } from "../../fetches/fetchFavorites";
import { useCarvingContext } from "../../providers/carvings.provider";
import { NavBar } from "../NavBar/NavBar";
import "./ProductPage.css";

export const ProductPage = () => {
  const location = useLocation();
  const { carvingArray } = useCarvingContext();
  const [favoriteArray, setFavoriteArray] = useState<
    { carvingId: number; userId: number; id: number }[]
  >([]);

  const getUserId = () => {
    const user = localStorage.getItem("user");
    if (user !== null) {
      const userId = JSON.parse(user)["id"];
      return userId;
    }
  };

  const findFavorites = (
    favsArray: { carvingId: number; userId: number; id: number }[]
  ) => {
    const userId = getUserId();
    const favs = favsArray.filter((favorite) => favorite.userId === userId);
    const carving = favs.filter(
      (carving) => carving.carvingId === location.state.productId
    );
    if (carving.length) {
      setFavoriteArray(carving);
    }
  };

  const addToFavorites = (e: any) => {
    const id = e.target.id;
    const userId = getUserId();
    addFavorite(userId, parseInt(id)).then((res) => {
      if (res.ok) {
        setFavoriteArray([
          ...favoriteArray,
          { userId: userId, carvingId: parseInt(id), id: 0 },
        ]);
      } else {
        toast.error(
          "there was an error while trying to favorite the product please try again or contact us for further assistance"
        );
      }
    });
  };

  const deleteAFavorites = (e: any) => {
    const id = e.target.id;
    const getFavorite = favoriteArray.find(
      (favorite) => favorite.carvingId === parseInt(id)
    );
    if (getFavorite !== undefined) {
      deleteFetch(getFavorite).then((res) => {
        if (res.ok) {
          setFavoriteArray(
            favoriteArray.filter(
              (carving) => carving.carvingId !== parseInt(id)
            )
          );
        } else {
          toast.error(
            "there was an error while trying to unfavorite the product please try again or contact us for further assistance"
          );
        }
      });
    }
  };

  useEffect(() => {
    fetchFavorites().then((data) => {
      findFavorites(data);
    });
  }, [favoriteArray.length]);

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
              {/* buttons need to take into consideration of actual product */}
              {favoriteArray.length ? (
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
