import { NavBar } from "../NavBar/NavBar";

export const ProductPage = () => {
  return (
    <div className="product-page-wrapper" id="productPage">
      <NavBar />
      <div className="h2-wrapper">
        <h2>Product Page</h2>
      </div>
      <div className="product-img-wrapper">
        <img src="" alt="" />
      </div>
      <div className="story-div">
        <p></p>
      </div>
      <div className="buttons-container">
        <button>Favorite</button>
        <button></button>
      </div>
    </div>
  );
};
