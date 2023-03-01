import { useState } from "react";
import { NavBar } from "../NavBar/NavBar";

const inputs = [
  {
    labelName: "Carving Name",
    type: "text",
    placeHolder: "Carving Name",
    name: "carvingName",
  },
  {
    labelName: "Image file",
    type: "file",
  },
  {
    type: "checkbox",
    labelName: "Hand Carved",
    name: "typeOfCarving",
  },
  {
    type: "checkbox",
    labelName: "Machined Carved",
    name: "typeOfCarving",
  },
  {
    type: "checkbox",
    labelName: "Do you want to sell this carving?",
  },
];

export const AddCarvingPage = () => {
  const [carvingName, setCarvingName] = useState("");
  const [image, setsetImage] = useState("");
  const [handCarved, setHandCarved] = useState(false);
  const [machinedCarved, setMachinedCarved] = useState(false);
  const [availableToSell, setAvailableToSell] = useState(false);
  const [price, setPrice] = useState("");
  return (
    <div className="add-carving-page-wrapper">
      <NavBar />
      <div className="form-wrapper">
        <form action="">
          {inputs.map((input) =>
            input.type !== "checkbox" ? (
              <>
                <label htmlFor={input.name}>{input.labelName}</label>
                <input
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeHolder}
                />
              </>
            ) : (
              <>
                <input
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeHolder}
                />
                <label htmlFor={input.name}>{input.labelName}</label>
              </>
            )
          )}
          {availableToSell === true ? (
            <>
              <label htmlFor="">Price</label>
              <input type="text" name="" placeholder="Price" />
            </>
          ) : null}
          <label htmlFor="story">Write your Story</label>
          <textarea name="story" cols="30" rows="10"></textarea>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
