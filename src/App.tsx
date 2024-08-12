import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhysicalHealth from "./component/PhysicalHealth";
// import Locator from "./component/Locator";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/physical" element={<PhysicalHealth />} />
          {/* <Route path="/locator" element={<Locator />} /> */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
