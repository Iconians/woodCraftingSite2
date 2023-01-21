import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCarvingContext } from "../../providers/carvings.provider";
import { NavBar } from "../NavBar/NavBar";
import "./ProductPage.css";

export const ProductPage = () => {
  const location = useLocation();
  const { carvingArray } = useCarvingContext();
  const [favorite, setFavorite] = useState<boolean>(false);
  const [favoriteArray, setFavoriteArray] = useState<[]>([]);

  // useEffect(() => {
  //   const fetchFavorites = fetch("http://localhost:3000/favorites")
  //   .then()
  //   const favorites = favoriteArray.map((favorite) => {
  //     if (favorite.userId) {

  //     }
  //   })

  // }, [])

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
                <button id={`${carving.id}`}>Favorite</button>
              ) : (
                <button id={`${carving.id}`}>unFavorite</button>
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
