import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import JewelleryList from "./pages/JewelleryList";
import JewelleryDetails from "./pages/JewelleryDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Offset for fixed navbar */}
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jewellery-list" element={<JewelleryList />} />
          <Route path="/jewellery-details/:id" element={<JewelleryDetails />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
