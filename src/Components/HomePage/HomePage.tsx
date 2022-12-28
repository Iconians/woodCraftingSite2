import { useEffect, useState } from "react";
import { fetchCarvings } from "../../fetches/getCarvings";
import { carvingArray } from "../../interfaces";
import { NavBar } from "../NavBar/NavBar";
import { ProductComponentHolder } from "../productComponetHolder/ProductComponentHolder";

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
  const [carvingArry, setCarvingArray] = useState<carvingArray[]>([]);
  const handCarved = carvingArry.filter(
    (carving) => carving.type === "handCarved"
  );
  const machineCarved = carvingArry.filter(
    (carving) => carving.type !== "handCarved"
  );

  useEffect(() => {
    fetchCarvings().then((data) => setCarvingArray(data));
  }, []);
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
        easliy find them
      </div>
    </div>
  );
};
