import "./ProductComponent.css";

interface props {
  img: string;
  id: number;
}

export const ProductHolder = ({ img, id }: props) => (
  <div className="product-holder-wrapper" key={id}>
    <div className="img-wrapper">
      <img src={img} alt="" />
    </div>
    <div>
      <button>More Details</button>
    </div>
  </div>
);
