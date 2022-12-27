import { NavBar } from "../NavBar/NavBar";
import { ProductComponentHolder } from "../productComponetHolder/ProductComponentHolder";

const fakeArr = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bioengineered_obese_mouse%2C_Aberdeen%2C_Scotland%2C_1998_Wellcome_L0060083.jpg",
    // key: 0,
    type: "machineCarved",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bioengineered_obese_mouse%2C_Aberdeen%2C_Scotland%2C_1998_Wellcome_L0060083.jpg",
    // key: 1,
    type: "handCarved",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bioengineered_obese_mouse%2C_Aberdeen%2C_Scotland%2C_1998_Wellcome_L0060083.jpg",
    // key: 2,
    type: "handCarved",
  },
];

const componentHolder = [
  {
    h3: "Machine Carved",
    key: 0,
  },
  {
    h3: "Hand Carved",
    key: 1,
  },
];

export const HomePage = () => {
  const handCarved = fakeArr.filter((carving) => carving.type === "handCarved");
  const machineCarved = fakeArr.filter(
    (carving) => carving.type !== "handCarved"
  );
  return (
    <div className="site-wrapper">
      <NavBar />
      {componentHolder.map((info) => (
        <ProductComponentHolder
          h3={info.h3}
          key={info.key}
          array={info.h3 === "Hand Carved" ? handCarved : machineCarved}
        />
      ))}
      <div className="disclaimer">
        Don't use your real passwords as this site is unsecure and ones can
        easliy find them
      </div>
    </div>
  );
};
