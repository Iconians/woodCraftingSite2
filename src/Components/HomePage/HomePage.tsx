import { useCarvingContext } from "../../providers/carvings.provider";
import { NavBar } from "../NavBar/NavBar";
import { ProductComponentHolder } from "../productComponetHolder/ProductComponentHolder";
import "./HomePage.css";

const componentHolder = [
  {
    h3: "Hand Carved",
    id: 1,
  },
  {
    h3: "Machine Carved",
    id: 0,
  },
];

export const HomePage = () => {
  const { carvingArray } = useCarvingContext();
  const handCarved = carvingArray.filter(
    (carving) => carving.type === "handCarved"
  );
  const machineCarved = carvingArray.filter(
    (carving) => carving.type !== "handCarved"
  );

  return (
    <div className="site-wrapper">
      <NavBar />
      {componentHolder.map((info) => (
        <ProductComponentHolder
          h3={info.h3}
          array={info.h3 === "Hand Carved" ? handCarved : machineCarved}
          key={info.id}
        />
      ))}

      <div className="disclaimer">
        Don't use your real passwords as this site is unsecure and ones can
        easily find them
      </div>
    </div>
  );
};
