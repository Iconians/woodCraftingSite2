import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { addFavorite } from "../../fetches/addFavorite";
import { deleteFetch } from "../../fetches/deleteFetch";
import { fetchFavorites } from "../../fetches/fetchFavorites";
import { Favorite } from "../../interfaces";
import { useCarvingContext } from "../../providers/carvings.provider";
import { NavBar } from "../NavBar/NavBar";
import "./ProductPage.css";

export const ProductPage = () => {
  const location = useLocation();
  const { carvingArray, addPurchaseItems } = useCarvingContext();
  const [favoriteArray, setFavoriteArray] = useState<Favorite[]>([]);

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

  const addFavorites = (id: number) => {
    const userId = getUserId();
    addFavorite(userId, id).then((res) => {
      if (res.ok) {
        setFavoriteArray([
          ...favoriteArray,
          { userId: userId, carvingId: id, id: 0 },
        ]);
      } else {
        toast.error(
          "there was an error while trying to favorite the product please try again or contact us for further assistance"
        );
      }
    });
  };

  const deleteFavorites = (id: number) => {
    const getFavorite = favoriteArray.find(
      (favorite) => favorite.carvingId === id
    );
    if (getFavorite !== undefined) {
      deleteFetch(getFavorite).then((res) => {
        if (res.ok) {
          setFavoriteArray(
            favoriteArray.filter((carving) => carving.carvingId !== id)
          );
        } else {
          toast.error(
            "there was an error while trying to unfavorite the product please try again or contact us for further assistance"
          );
        }
      });
    }
  };

  const addItemToCart = (e: any) => {
    const id = e.target.id;
    const findItem = carvingArray.find(
      (carving) => carving.id === parseInt(id)
    );
    addPurchaseItems(findItem);
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
              {favoriteArray.length ? (
                <FontAwesomeIcon
                  icon={faHeart}
                  className="heart-icon"
                  onClick={() => {
                    deleteFavorites(carving.id);
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faHeartBroken}
                  className="heart-icon"
                  onClick={() => {
                    addFavorites(carving.id);
                  }}
                />
              )}
            </div>
            <div className="story-div">
              <p>{carving.story}</p>
            </div>
            <div className="buttons-container">
              {carving.price ? (
                <>
                  {carving.qty === 0 ? (
                    <p>out of stock</p>
                  ) : (
                    <button
                      id={`${carving.id}`}
                      onClick={addItemToCart}
                      disabled={carving.qty === 0}
                    >{`Add to Cart $${carving.price.toFixed(2)}`}</button>
                  )}
                </>
              ) : null}
            </div>
          </>
        ) : null
      )}
    </div>
  );
};
