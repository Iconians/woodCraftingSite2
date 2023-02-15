import "./App.css";
import { HomePage } from "./Components/HomePage/HomePage";
import { CarvingProvider } from "./providers/carvings.provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductPage } from "./Components/ProductPage/ProductPage";
import { SignInPage } from "./Components/SignInPage/SignInPage";
import { AuthProvider } from "./providers/auth.provider";
import { Toaster } from "react-hot-toast";
import { CheckoutPage } from "./Components/CheckoutPage/Checkoutpage";
import { ConfirmationPage } from "./Components/ConfirmationPage/ConfirmationPage";

function App() {
  return (
    <div className="App">
      <CarvingProvider carvingArray={[]} addPurchaseItems={[]} cartItems={[]}>
        <AuthProvider user loggedIn createUser signinUser signoutUser>
          <Toaster />
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/Component/ProductPage/ProductPage"
                element={<ProductPage />}
              />
              <Route
                path="/Component/SignInPage/SignInPage"
                element={<SignInPage />}
              />
              <Route
                path="/Component/CheckoutPage/CheckoutPage"
                element={<CheckoutPage />}
              />
              <Route
                path="/Component/ConfirmationPage/ConfirmationPage"
                element={<ConfirmationPage />}
              />
            </Routes>
          </Router>
        </AuthProvider>
      </CarvingProvider>
    </div>
  );
}

export default App;
