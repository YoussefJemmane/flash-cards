import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import LikedCards from "./pages/LikedCards";
import { useState, useEffect } from "react";

function App() {
  // const location = useLocation();
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem("flashcards");
    return savedCards ? JSON.parse(savedCards) : [];
  });
  const [flippedId, setFlippedId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("flashcards", JSON.stringify(cards));
  }, [cards]);

  function handleFlip(id) {
    setFlippedId(flippedId === id ? null : id);
  }

  function handleLike(id) {
    setCards(cards => cards.map(card => card.id === id ? { ...card, liked: !card.liked } : card));
  }

  function handleEdit(id) {
    setEditId(id);
    setShowForm(true);
  }

  function handleDelete(id) {
    setCards(cards => cards.filter(card => card.id !== id));
  }

  function handleCreate() {
    setEditId(null);
    setShowForm(true);
  }

  function handleSave(newCardData) {
    if (editId) {
      setCards(cards => cards.map(card => card.id === editId ? { ...card, ...newCardData } : card));
    } else {
      const newCard = { ...newCardData, id: Date.now(), liked: false };
      setCards(cards => [...cards, newCard]);
    }
    setShowForm(false);
    setEditId(null);
  }

  function handleEditSave(id, updatedData) {
    setCards(cards => cards.map(card => String(card.id) === String(id) ? { ...card, ...updatedData } : card));
  }

  function handleCancel() {
    setShowForm(false);
    setEditId(null);
  }

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/cards" element={
          <Cards
            cards={cards}
            flippedId={flippedId}
            showForm={showForm}
            editId={editId}
            onFlip={handleFlip}
            onLike={handleLike}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onCreate={handleCreate}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        } />
        <Route path="/liked-cards" element={
          <LikedCards
            cards={cards}
            flippedId={flippedId}
            showForm={showForm}
            editId={editId}
            onFlip={handleFlip}
            onLike={handleLike}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
