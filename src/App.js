import './App.css';
import AboutUs from './component/AboutUs';
import Home from "./component/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
