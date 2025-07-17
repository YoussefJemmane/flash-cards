import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CardPage from "./components/CardPage";

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== '/cards';

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/cards" element={<CardPage />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
