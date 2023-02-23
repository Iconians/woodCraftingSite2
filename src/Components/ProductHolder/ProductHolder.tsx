import { Link } from "react-router-dom";
import "./ProductHolder.css";

interface props {
  img: string;
  id: number;
}

export const ProductHolder = ({ img, id }: props) => {
  return (
    <div className="product-holder-wrapper" key={id}>
      <div className="img-wrapper">
        <img src={img} alt="" />
      </div>
      <div>
        <Link
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
