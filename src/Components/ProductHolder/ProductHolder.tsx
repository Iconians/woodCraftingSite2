import { useNavigate } from "react-router-dom";
import "./ProductHolder.css";

interface props {
  img: string;
  id: number;
}

export const ProductHolder = ({ img, id }: props) => {
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
      <img src={img} alt="" />
    </div>
  );
};
