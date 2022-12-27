import "./ProductComponent.css";

interface props {
  img: string;
}

export const ProductHolder = ({ img }: props) => (
  <div className="product-holder-wrapper">
    <div className="img-wrapper">
      <img src={img} alt="" />
    </div>
    <div>
      <button>More Details</button>
    </div>
  </div>
);
