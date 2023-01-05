import { Link, useNavigate } from "react-router-dom";
import "./ProductHolder.css";

interface props {
  img: string;
  id: number;
}

export const ProductHolder = ({ img, id }: props) => {
  const navigate = useNavigate();
  const openProduct = (id: number) => {
    navigate("/Component/ProductPage/ProductPage", {
      state: {
        productId: id,
      },
    });
  };
  return (
    <div className="product-holder-wrapper" key={id}>
      <div className="img-wrapper">
        <img src={img} alt="" />
      </div>
      <div>
        <Link
          to="/Component/ProductPage/ProductPage"
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
