import { useNavigate } from "react-router-dom";
import "./ProductHolder.css";

interface props {
  img: string;
  id: number;
  name: string;
}

export const ProductHolder = ({ name, img, id }: props) => {
  const navigate = useNavigate();
  const navigateToProductPage = () => {
    navigate("/ProductPage", { state: { productId: id } });
  };
  return (
    <div
      className="product-holder-wrapper"
      key={id}
      onClick={navigateToProductPage}
    >
      <div className="img-div">
        <img src={img} alt="" />
      </div>
      <div className="name-div">
        <h3>{name}</h3>
      </div>
      <div className="desc-div">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
    </div>
  );
};
