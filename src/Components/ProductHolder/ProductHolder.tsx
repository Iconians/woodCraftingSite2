import { Link, useNavigate } from "react-router-dom";
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
      <div className="img-wrapper">
        <img src={img} alt="" />
      </div>
      <div>
        <Link
          className="link-wrapper"
          to="/ProductPage"
          state={{
            productId: id,
          }}
        >
          <p>More Details</p>
        </Link>
      </div>
    </div>
  );
};
