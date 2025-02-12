import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
