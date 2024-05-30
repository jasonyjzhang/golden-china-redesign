import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "../src/pages/Home";
import Menu from "../src/pages/Menu";
import Contact from "../src/pages/Contact";

export default function App() {
  return (
    <div className={`text-dark`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="menu" element={<Menu />}/>
          <Route path="contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
};