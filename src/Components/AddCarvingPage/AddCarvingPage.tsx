import { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import "./AddCarvingPage.css";

const inputs = [
  {
    labelName: "Carving Name",
    type: "text",
    placeHolder: "Carving Name",
    name: "carvingName",
    // value: carvingName,
  },
  {
    labelName: "Image file",
    type: "file",
    id: "file-label",
    inputId: "file-input",
    name: "file",
  },
  {
    type: "radio",
    labelName: "Hand Carved",
    name: "typeOfCarving",
  },
  {
    type: "radio",
    labelName: "Machined Carved",
    name: "typeOfCarving",
  },
  {
    type: "radio",
    labelName: "Do you want to sell this carving?",
    name: "sellCarving",
  },
];

export const AddCarvingPage = () => {
  const [carvingName, setCarvingName] = useState("");
  const [image, setImage] = useState("");
  const [handCarved, setHandCarved] = useState(false);
  const [machinedCarved, setMachinedCarved] = useState(false);
  const [availableToSell, setAvailableToSell] = useState(false);
  const [price, setPrice] = useState("");
  const [story, setStory] = useState("");

  const captureInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "carvingName":
        setCarvingName(value);
        break;
      case "file":
        setImage(value);
        break;
      case "typeOfCarving":
        setHandCarved(false);
        setMachinedCarved(false);
        break;
      case "typeOfCarving":
        setHandCarved(false);
        setMachinedCarved(false);
        break;
      case "sellCarving":
        setAvailableToSell(true);
        break;
      case "price":
        setPrice(value);
        break;
    }
  };

  return (
    <div className="add-carving-page-wrapper">
      <NavBar />
      <div className="add-carving-h2">
        <h2>Upload your Carving</h2>
      </div>
      <div className="form-wrapper">
        <form action="">
          {inputs.map((input) =>
            input.type !== "radio" ? (
              <>
                <label htmlFor={input.name} id={input.id}>
                  {input.labelName}
                </label>
                <input
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeHolder}
                  id={input.inputId}
                  onChange={captureInput}
                />
              </>
            ) : (
              <div className="radio-input">
                <input
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeHolder}
                  onChange={captureInput}
                />
                <label htmlFor={input.name}>{input.labelName}</label>
              </div>
            )
          )}
          {availableToSell === true ? (
            <>
              <label htmlFor="">Price</label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                onChange={captureInput}
              />
            </>
          ) : null}
          <label htmlFor="story" className="textarea-label">
            Write your Story
          </label>
          <textarea
            name="story"
            cols="30"
            rows="10"
            className="textarea"
            onChange={(e) => setStory(e.target.value)}
          ></textarea>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
