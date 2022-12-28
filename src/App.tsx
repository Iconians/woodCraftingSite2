import "./App.css";
import { HomePage } from "./Components/HomePage/HomePage";
import { CarvingProvider } from "./providers/carvings.provider";

function App() {
  return (
    <div className="App">
      {/* <CarvingProvider> */}
      <HomePage />
      {/* </CarvingProvider> */}
    </div>
  );
}

export default App;
