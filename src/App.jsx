import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cards from "./pages/Cards";

function App() {
  const location = useLocation();
  

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
