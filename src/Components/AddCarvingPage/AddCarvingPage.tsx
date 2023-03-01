import { useState } from "react";
import { carvingPictures } from "../../assets/carvingPictures";
import { useFavoriteContext } from "../../providers/favorites.provider";
import { NavBar } from "../NavBar/NavBar";
import "./AddCarvingPage.css";

const inputs = [
  {
    labelName: "Carving Name",
    type: "text",
    placeHolder: "Carving Name",
    name: "carvingName",
  },
  {
    type: "radio",
    labelName: "Hand Carved",
    name: "typeOfCarving",
    value: "handCarving",
    checked: true,
  },
  {
    type: "radio",
    labelName: "Machined Carved",
    name: "typeOfCarving",
    value: "machinedCarving",
  },
  {
    type: "radio",
    labelName: "Do you want to sell this carving?",
    name: "sellCarving",
  },
];

export const AddCarvingPage = () => {
  const [carvingName, setCarvingName] = useState("");
  const [image, setImage] = useState(carvingPictures.bear);
  const [handCarved, setHandCarved] = useState(true);
  const [machinedCarved, setMachinedCarved] = useState(false);
  const [availableToSell, setAvailableToSell] = useState(false);
  const [price, setPrice] = useState("");
  const [story, setStory] = useState("");
  const { getUserId } = useFavoriteContext();

  const captureInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "carvingName":
        setCarvingName(value);
        break;
      case "typeOfCarving":
        if (value === "handCarving") {
          setHandCarved(true);
          setMachinedCarved(false);
        } else {
          setMachinedCarved(true);
          setHandCarved(false);
        }
        break;
      case "sellCarving":
        setAvailableToSell(true);
        break;
      case "price":
        setPrice(value);
        break;
    }
  };

  const getUserName = () => {
    const user = localStorage.getItem("user");
    if (user !== null) {
      const userId = JSON.parse(user)["name"];
      return userId;
    }
  };

  const newCarving = () => {
    const carving = {
      carvingName: carvingName,
      image: image,
      story: story,
      type: handCarved ? handCarved : machinedCarved,
      price: price.length ? price : null,
      userId: getUserId(),
      carversName: getUserName(),
      qty: 1,
    };
    console.log(carving);
  };

  return (
    <div className="add-carving-page-wrapper">
      <NavBar />
      <div className="add-carving-h2">
        <h2>Upload your Carving</h2>
      </div>
      <div className="form-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            newCarving();
          }}
        >
          {inputs.map((input) =>
            input.type !== "radio" ? (
              <>
                <label htmlFor={input.name}>{input.labelName}</label>
                <input
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeHolder}
                  onChange={captureInput}
                />
              </>
            ) : (
              <div className="radio-input">
                <input
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeHolder}
                  value={input.value}
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
          <label htmlFor="image">Image</label>
          <select
            name="image"
            id=""
            onChange={(e) => {
              setImage(e.target.value);
            }}
          >
            {Object.entries(carvingPictures).map(([label, pictureValue]) => {
              return <option value={pictureValue}>{label}</option>;
            })}
          </select>
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
