import { useLocation } from "react-router-dom";
import { useCarvingContext } from "../../providers/carvings.provider";
import { NavBar } from "../NavBar/NavBar";
import "./ProductPage.css";

export const ProductPage = () => {
  const location = useLocation();
  console.log(location);
  const { carvingArray } = useCarvingContext();

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
              <button>Favorite</button>
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
