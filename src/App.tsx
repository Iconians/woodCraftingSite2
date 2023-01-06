import "./App.css";
import { HomePage } from "./Components/HomePage/HomePage";
import { CarvingProvider } from "./providers/carvings.provider";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProductPage } from "./Components/ProductPage/ProductPage";
import { SignInPage } from "./Components/SignInPage/SignInPage";
import { AuthProvider } from "./providers/auth.provider";

function App() {
  return (
    <div className="App">
      <CarvingProvider carvingArray={[]}>
        <AuthProvider user loggedIn createUser>
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
            </Routes>
          </Router>
        </AuthProvider>
      </CarvingProvider>
    </div>
  );
}

export default App;
