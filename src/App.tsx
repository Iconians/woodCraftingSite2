import "./App.css";
import { HomePage } from "./Components/HomePage/HomePage";
import { CarvingProvider } from "./providers/carvings.provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductPage } from "./Components/ProductPage/ProductPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "Component/ProductPage/ProductPage/:productPageId",
          element: <ProductPage />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <CarvingProvider carvingArray={[]}>
        <RouterProvider router={router} />
        {/* <Route index element={<HomePage />} />
        <Route path="productPage" element={<ProductPage />} /> */}
      </CarvingProvider>
    </div>
  );
}

export default App;
