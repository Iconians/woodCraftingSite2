import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { listOfMonths } from "../../listOfMonths";
import { listOfStates } from "../../ListOfStates";
import { listOfYears } from "../../listOfYears";
import { NavBar } from "../NavBar/NavBar";

export const CheckoutPage = () => {
  const location = useLocation();
  const [total, setTotal] = useState(0);
  const findTotal = () => {
    setTotal(parseInt(location.state.subtotal) + 12.99);
  };
  useEffect(() => {
    findTotal();
  }, []);
  return (
    <div className="checkout-page-wrapper">
      <NavBar />
      <div className="shipping-info-wrapper">
        <h2>Shipping Information</h2>
        <form action="">
          <label htmlFor="name">Full Name (First and Last)</label>
          <input type="text" name="name" placeholder="Name" />
          <label htmlFor="address">Address</label>
          <input type="text" name="address" placeholder="Address" />
          <label htmlFor="city">City</label>
          <input type="text" name="city" placeholder="City" />
          <label htmlFor="state">State</label>
          <select name="state" id="stateId">
            {listOfStates.map((state) => (
              <option>{state}</option>
            ))}
          </select>
          <label htmlFor="zip">Zip</label>
          <input type="text" name="zip" placeholder="Zip" />
        </form>
      </div>
      <div className="payment-info-wrapper">
        <h2>Payment</h2>
        <form action="">
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
        </form>
        <button>Pay</button>
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
