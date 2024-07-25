import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/Page1">Page1</Link>
          <br />
          <Link to="/Page2">Page2</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
