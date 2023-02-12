import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { listOfMonths } from "../../listOfMonths";
import { listOfStates } from "../../ListOfStates";
import { listOfYears } from "../../listOfYears";
import { NavBar } from "../NavBar/NavBar";

export const CheckoutPage = () => {
  const location = useLocation();
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireMonth, setExpireMonth] = useState("");
  const [expireYear, setExpireYear] = useState("");
  const findTotal = () => {
    setTotal(parseInt(location.state.subtotal) + 12.99);
  };
  const inputData = [
    {
      label: "Full Name (First and Last)",
      name: "name",
      value: name,
    },
    {
      label: "Address",
      name: "address",
      value: address,
    },
    {
      label: "City",
      name: "city",
      value: city,
    },
  ];
  useEffect(() => {
    findTotal();
  }, []);
  return (
    <div className="checkout-page-wrapper">
      <NavBar />
      <div className="form-info-wrapper">
        <h2>Shipping Information</h2>
        <form action="">
          {inputData.map((input) => (
            <>
              <label htmlFor={input.name}>{input.label}</label>
              <input type="text" name={input.name} placeholder={input.label} />
            </>
          ))}

          <label htmlFor="state">State</label>
          <select value={state} name="state" id="stateId">
            {listOfStates.map((state) => (
              <option value={state}>{state}</option>
            ))}
          </select>
          <label htmlFor="zip">Zip</label>
          <input type="text" name="zip" placeholder="Zip" />
          <h2>Payment</h2>
          <label htmlFor="card-number">Card Numbers</label>
          <input type="text" />
          <div className="expire-wrapper">
            <label htmlFor="card-expire">Expire Month</label>
            <select name="" id="">
              {listOfMonths.map((month) => (
                <option>{month}</option>
              ))}
            </select>
            <label htmlFor="card-expire">Expire Year</label>
            <select name="" id="">
              {listOfYears.map((year) => (
                <option>{year}</option>
              ))}
            </select>
          </div>
          <input type="submit" />
        </form>
      </div>
      <div className="total-wrapper">
        <h2>Total</h2>
        <div>
          <h3>subtotal</h3>
          <p>{location.state.subtotal}</p>
        </div>
        <div>
          <h3>shipping</h3>
          <p>12.99</p>
        </div>
        <div>
          <h3>Total</h3>
          <p>{total}</p>
        </div>
      </div>
    </div>
  );
};
